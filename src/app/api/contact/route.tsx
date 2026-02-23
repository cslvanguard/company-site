export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { name, email, company, service, budget, message } = await req.json();

    const body = `
        New Contact Form Submission
        
        From: ${name} (${email})
        Company: ${company || "N/A"}
        Service: ${service || "N/A"}
        Budget: ${budget || "N/A"}
        
        Message:
        ${message}
    `.trim();

    console.log("Email body:", body);

    const mcResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "customersupport@cslvanguard.com" }],
          },
        ],
        from: {
          email: "no-reply@cslvanguard.com",
          name: "CSL Vanguard Contact Form",
        },
        subject: `New Contact from ${name}`,
        content: [{ type: "text/plain", value: body }],
      }),
    });

    const mcResult = await mcResponse.text();
    console.log("MailChannels response status:", mcResponse.status);
    console.log("MailChannels response body:", mcResult);

    if (!mcResponse.ok) {
      throw new Error(`MailChannels failed: ${mcResponse.status} ${mcResult}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process request",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}