import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dotenv from "dotenv";
dotenv.config();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const keywords = [
  "Ariful Islam Arman",
  "MERN Stack Developer",
  "MongoDB Developer",
  "Express.js Developer",
  "React Developer",
  "Node.js Developer",
  "Full Stack Developer Bangladesh",
  "Web Developer Portfolio",
  "JavaScript Developer",
  "Frontend Developer",
  "Backend Developer",
  "Responsive Web Design",
];

const articleTags = { "article:tag": keywords };

export const metadata = {
  title: "Ariful Islam Arman",
  description:
    "I'm Ariful Islam Arman, a passionate MERN Stack Developer. Since 2022, I've been building responsive, scalable web apps using MongoDB, Express.js, React, and Node.js with a focus on clean code and great user experience.",

  keywords: keywords,
  openGraph: {
    title: "Ariful Islam Arman - MERN Stack Developer",
    description:
      "A passionate MERN Stack Developer from Bangladesh, specializing in building dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js.",
    url: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`,
    images: [
      {
        url: `/images/ariful_islam_arman.jpg`,
        width: 1200,
        height: 630,
        alt: "Ariful Islam Arman - MERN Stack Developer",
      },
    ],
    site_name: "Ariful Islam Arman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariful Islam Arman - MERN Stack Developer",
    description:
      "MERN Stack Developer from Bangladesh, building dynamic web applications with MongoDB, Express.js, React, and Node.js.",
    image: `/images/ariful_islam_arman.jpg`,
  },
  other: articleTags,
};
export const viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "black" }],
};
export default function RootLayout({ children }) {
  var jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ariful Islam Arman",
    alternateName: "Arman",
    url: process.env.NEXT_PUBLIC_PORTFOLIO_URL,
    image: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/images/ariful_islam_arman.jpg`,
    jobTitle: "MERN Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: [
      "https://www.facebook.com/1R13A14",
      "https://www.instagram.com/aru.ofc.ins/",
      "https://x.com/1r13a14",
      "https://www.linkedin.com/in/1r13a14/",
      "https://github.com/Aru-Ofc-git",
      "https://www.fiverr.com/arman_ofc/",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Kabirhat Govt. College",
    },
    knowsAbout: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "REST APIs",
      "Tailwind CSS",
      "Bootstrap",
      "Git",
      "Next.js",
      "AJAX",
      "jQuery",
      "ejs",
      "python",
    ],
    description:
      "Ariful Islam Arman is a passionate MERN Stack Developer from Bangladesh who builds modern, dynamic web applications using MongoDB, Express.js, React, and Node.js.",
    nationality: {
      "@type": "Country",
      name: "Bangladesh",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
