import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",  // This email will change once we aquire a real domain for the website
        to: ["11cvantress@gmail.com"],
        subject: `Portfolio Contact: ${name}`,
        html: `
            <h2>New portfolio contact</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
    });

    if (error) {
        return Response.json(
            { error },
            { status: 500 }
        );
    }

    return Response.json({
        success: true,
        data,
    });
}