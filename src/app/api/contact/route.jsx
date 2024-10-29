import connectMongodb from "../../../../utils/connectMongodb";
import ContactModel from "../../../../models/contactModel";

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();
        const contact = { name, email, subject, message };
        await connectMongodb();
        await ContactModel.create(contact);
        return new Response(JSON.stringify({ message: 'Contact details has been sent!' }), {
            status: 201,
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: error._message }), {
            status: 500,
        });
    }
}

export async function GET() {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
        status: 405,
    });
}
