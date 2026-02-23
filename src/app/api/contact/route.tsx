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

    console.log("Form submission received:", body);

    // TODO: Implement email sending logic for Netlify/Generic environment
    // For now, we'll just log it and return success
    
    return new Response(JSON.stringify({ success: true, message: "Submission received (mock)" }), {
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