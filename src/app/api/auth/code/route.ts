import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import appConfig from '@/config/appConfig';
import { InstagramService } from '@/services/instagram';

export async function POST(request: Request) {
  const cookieStore = cookies();
  const { code } = await request.json();
  const instagramService = new InstagramService();

  const token = cookieStore.get('token');

  console.log('token: ', token);

  if (code) {
    const accessToken = await instagramService.getAccessToken(code);

    console.log('accessToken: ', accessToken);

    return NextResponse.redirect(`${appConfig.host}/success`, 307);
  } else {
    return NextResponse.redirect(`${appConfig.host}/failure`, 307);
  }
}
