export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    console.log(name);
    console.log(email);
    console.log(message);

    return Response.json({
        message: "Contact form received!"
    });
}