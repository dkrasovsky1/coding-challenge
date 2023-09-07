import appConfig from '@/config/appConfig';
import { SignJWT, jwtVerify } from 'jose';

export class JwtService {
  static async verifyJWT<T>(token: string): Promise<T> {
    try {
      return (
        await jwtVerify(token, new TextEncoder().encode(appConfig.jwtSecretKey))
      ).payload as T;
    } catch (error) {
      console.log(error);
      throw new Error('Your token has expired.');
    }
  }

  static async signJWT(payload: { sub: string }, options: { exp: string }) {
    try {
      const secret = new TextEncoder().encode(appConfig.jwtSecretKey);
      const alg = 'HS256';

      return new SignJWT(payload)
        .setProtectedHeader({ alg })
        .setExpirationTime(options.exp)
        .setIssuedAt()
        .setSubject(payload.sub)
        .sign(secret);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
