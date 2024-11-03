import connectMongodb from "../../../../utils/connectMongodb";
import ContactModel from "../../../../models/contactModel";
import { sendEmail } from "../../../../utils/nodemailerconfig"; // Import sendEmail function

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();
        const contact = { name, email, subject, message };
        
        await connectMongodb();
        await ContactModel.create(contact); // Save contact to MongoDB

        await sendEmail(contact); // Send email

        return new Response(JSON.stringify({ message: 'Contact details have been sent!' }), {
            status: 201,
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), {
            status: 500,
        });
    }
}

export async function GET() {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
        status: 405,
    });
}
