import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import Configuration, {  OpenAI } from "openai"
    
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
    try {
        const { userId } = auth();

        const body = await req.json()
        const { message } = body;

        if(!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        
    } catch (error) {
        console.log("[CONVERSATION] [POST] [ERROR]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}