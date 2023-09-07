import { NextResponse } from 'next/server';
import appConfig from '@/config/appConfig';
import { InstagramService } from '@/services/instagram';

export async function POST(request: Request) {
  console.log('get request: ', request.url);

  const { searchParams } = new URL(request.url);
  const instagramService = new InstagramService();
  const code = searchParams.get('code');

  if (code) {
    const accessToken = await instagramService.getAccessToken(code);

    console.log('accessToken: ', accessToken);

    return NextResponse.redirect(`${appConfig.host}/success`, 307);
  } else {
    return NextResponse.redirect(`${appConfig.host}/failure`, 307);
  }
}
