import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, company, service, budget, message } = JSON.parse(
    event.body || "{}",
  );

  const { error } = await resend.emails.send({
    from: "CSL Vanguard <customersupport@cslvanguard.com>", // change after verifying your domain
    to: "customersupport@cslvanguard.com",
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Company: ${company || "N/A"}
      Service: ${service}
      Budget: ${budget || "N/A"}
      
      Message:
      ${message}
    `.trim(),
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email", details: error }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent successfully!" }),
  };
};

export { handler };