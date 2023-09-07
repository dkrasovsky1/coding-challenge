import { NextResponse } from 'next/server';
import { SiweMessage } from 'siwe';

export async function POST(request: Request) {
  const { message, signature } = await request.json();
  const siweMessage = new SiweMessage(message);

  try {
    const response = await siweMessage.verify({ signature });

    console.log('signature verified: ', response.data);

    return NextResponse.json({ sussces: true });
  } catch {
    return NextResponse.json({ sussces: false });
  }
}
