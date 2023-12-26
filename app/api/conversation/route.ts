import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import OpenAIApi from "openai"
import Configuration from "openai"
    
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
    try {
        const { userId } = auth();

        const body = await req.json()
        const { message } = body;

        if(!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        if(!configuration.apiKey) {
            return new NextResponse("OpenAi API Key not configured", { status: 500 })
        }
        if(!message) {
            return new NextResponse("Message is required", { status: 400 })
        }

        
        
    } catch (error) {
        console.log("[CONVERSATION] [POST] [ERROR]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}