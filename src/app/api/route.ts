import { NextResponse } from 'next/server'
import storage from '@/lib/storage'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const key = searchParams.get('key')
  
  if (!key) {
    return NextResponse.json({ error: 'Key is required' }, { status: 400 })
  }

  const value = await storage.getItem(key)
  return NextResponse.json({ [key]: value })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { key, value } = body

  if (!key || value === undefined) {
    return NextResponse.json({ error: 'Key and value are required' }, { status: 400 })
  }

  await storage.setItem(key, JSON.stringify(value))
  return NextResponse.json({ success: true })
}
