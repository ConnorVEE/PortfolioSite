import { Resend } from "resend";
import { contactRateLimit } from "@/lib/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    // 1. Rate limiting
    const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "127.0.0.1";

    const { success, limit, remaining, reset } = await contactRateLimit.limit(ip);

    if (!success) {
        return Response.json(
            { error: "Too many requests. Please try again in an hour." },
            {
                status: 429, // HTTP 429: Too Many Requests
                headers: {
                    "X-RateLimit-Limit": limit.toString(),
                    "X-RateLimit-Remaining": remaining.toString(),
                    "X-RateLimit-Reset": reset.toString(),
                },
            }
        );
    }

    // 2. Form validation
    const { name, email, message } = await request.json();

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof message !== "string"
    ) {
        return Response.json(
            { error: "Invalid form data" },
            { status: 400 }
        );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return Response.json(
            { error: "Invalid email address" },
            { status: 400 }
        );
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
        return Response.json(
            { error: "All fields are required" },
            { status: 400 }
        );
    }
    
    if (name.length > 40) {
        return Response.json(
            { error: "Name is too long" },
            { status: 400 }
        );
    }

    if (email.length > 50) {
        return Response.json(
            { error: "Email is too long" },
            { status: 400 }
        );
    }

    if (message.length > 600) {
        return Response.json(
            { error: "Message is too long" },
            { status: 400 }
        );
    }

    // 3. Send email
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