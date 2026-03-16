import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {

    try {

        const body = await req.json();

        const messages = body.messages

        const response = await groq.chat.completions.create({
            
            model: "llama-3.1-8b-instant",
            messages: messages,
        })

        const aiReply = response.choices[0].message.content;

        return Response.json({
            reply: aiReply
        })
        
    } catch (error) {
        console.error("API error:", error);
    return Response.json({ reply: "Something went wrong." }, { status: 500 });
    }
    
}