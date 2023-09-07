import appConfig from '@/config/appConfig';
import { JwtService } from '@/services/jwt';
import { NextResponse } from 'next/server';
import { SiweMessage } from 'siwe';

export async function POST(request: Request) {
  const { message, signature } = await request.json();
  const siweMessage = new SiweMessage(message);

  try {
    const verifiedMessage = await siweMessage.verify({ signature });
    const accessToken = await JwtService.signJWT(
      {
        sub: verifiedMessage.data.address,
      },
      { exp: `${appConfig.jwtExpiresIn}m` },
    );

    const tokenMaxAge = appConfig.jwtExpiresIn * 60;
    const cookieOptions = {
      name: 'token',
      value: accessToken,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV !== 'development',
      maxAge: tokenMaxAge,
    };

    const response = new NextResponse(
      JSON.stringify({
        status: 'success',
        accessToken,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );

    response.cookies.set(cookieOptions);

    return response;
  } catch {
    return NextResponse.json({ sussces: false });
  }
}
