import appConfig from '@/config/appConfig';
import { buildUrlEncodedPayload } from '@/utils';
import { GetAccessTokenResponse } from './types';

export class InstagramService {
  private readonly baseApiUrl: string = 'https://api.instagram.com';

  async getAccessToken(code: string): Promise<GetAccessTokenResponse> {
    try {
      const body = {
        client_id: appConfig.instagramClientId,
        client_secret: appConfig.instagramClientSecret,
        grant_type: 'authorization_code',
        redirect_uri: `${appConfig.host}${appConfig.instagramRedirectUri}`,
        code: code.replace('#_', ''),
      };

      const response = await fetch(`${this.baseApiUrl}/oauth/access_token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: buildUrlEncodedPayload(body),
      });

      if (!response.ok) {
        const error = await response.json();

        throw new Error(
          `Error getting access token: code ${error.code} ${error.error_type} - ${error.error_message}`,
        );
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
