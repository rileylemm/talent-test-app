import { Configuration, OpenAIApi } from 'openai-edge'
import { createPrompt, PromptData } from '@/lib/promptStructures'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export const runtime = 'edge'

export async function POST(req: Request) {
  const promptData: PromptData = await req.json()

  const prompt = createPrompt(promptData)

  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    stream: true,
    messages: [
      { role: 'system', content: 'You are a career advisor with expertise in matching talents and interests to potential careers and educational paths.' },
      { role: 'user', content: prompt }
    ],
  })

  // Ensure the response is ok
  if (!response.ok) {
    return new Response(JSON.stringify({ error: 'OpenAI API error' }), { status: response.status })
  }

  // Get the response body as a readable stream
  const stream = response.body

  if (!stream) {
    return new Response('No stream in response', { status: 500 })
  }

  // Return the stream directly
  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}