export function body(name, email, message) {
  var html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>New Contact Form Message</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #121212;
      font-family: 'Segoe UI', sans-serif;
      color: #e0e0e0;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #1e1e1e;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(0,0,0,0.4);
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #333;
    }
    .header h2 {
      margin: 0;
      color: #ffffff;
    }
    .content {
      padding-top: 20px;
      color:#fff;
    }
    .content p {
      margin: 10px 0;
      line-height: 1.6;
      color:#fff;
    }
    .label {
      font-weight: bold;
      color: #90caf9;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      font-size: 12px;
      color: #757575;
    }
    @media screen and (max-width: 600px) {
      .container {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>💬 New Message from Contact Form</h2>
    </div>
    <div class="content">
      <p><span class="label">Name:</span> ${name}</p>
      <p><span class="label">Email:</span> ${email}</p>
      <p"><span class="label">Message:</span><br>${message}</p>
    </div>
    <div class="footer">
      This message was sent from your website's contact form.
    </div>
  </div>
</body>
</html>
`;
  return html;
}
