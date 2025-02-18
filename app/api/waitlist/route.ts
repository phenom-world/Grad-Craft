import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { NextResponse } from 'next/server'

import { db } from '@/lib/firebase'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Check if email already exists
    const q = query(collection(db, 'waitlist'), where('email', '==', email))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 400 },
      )
    }

    await addDoc(collection(db, 'waitlist'), {
      email,
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 },
    )
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
