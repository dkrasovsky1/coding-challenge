import appConfig from '@/config/appConfig';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  console.log('data: ', data);

  try {
    const response = await fetch(
      'https://api.instagram.com/oauth/access_token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'x-www-form-urlencoded',
        },
        body: JSON.stringify({
          client_id: appConfig.instagramClientId,
          client_secret: appConfig.instagramClientSecret,
          grant_type: 'authorization_code',
          redirect_uri: '...',
          code: data.code,
        }),
      },
    );

    if (response.ok) {
      const responseData = await response.json();

      console.log('responseData: ', responseData);
    }
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({ success: true });
}
