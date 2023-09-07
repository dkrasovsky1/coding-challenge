import { NextResponse } from 'next/server';
import appConfig from '@/config/appConfig';
import { InstagramService } from '@/services/instagram';

export async function POST(request: Request) {
  const { code } = await request.json();
  const instagramService = new InstagramService();

  if (code) {
    const accessToken = await instagramService.getAccessToken(code);

    console.log('accessToken: ', accessToken);

    return NextResponse.redirect(`${appConfig.host}/success`, 307);
  } else {
    return NextResponse.redirect(`${appConfig.host}/failure`, 307);
  }
}
