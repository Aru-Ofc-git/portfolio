import dotenv from "dotenv";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { body } from "./emailBody";

dotenv.config();
export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Required input missing.",
        },
        { status: 400 }
      );
    }

    const html = body(name, email, message);
    var auth = {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    };
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: auth,
    });
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL}>`,
      to: process.env.RECIVE_EMAIL,
      subject: "Email From Contact",
      html,
    };
    const info = await transporter.sendMail(mailOptions);

    if (info.messageId) {
      return NextResponse.json(
        { success: true, message: "Email successfully sent." },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Email not sent." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}