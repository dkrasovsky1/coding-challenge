import appConfig from '@/config/appConfig';

export const buildInstagramAuthUrl = (
  clientId: string,
  redirectUri: string,
) => {
  const url = new URL('https://api.instagram.com/oauth/authorize');

  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', `${appConfig.host}${redirectUri}`);
  url.searchParams.set(
    'scope',
    'user_profile,user_media,instagram_basic,instagram_content_publish',
  );
  url.searchParams.set('response_type', 'code');

  return url.toString();
};

export function buildUrlEncodedPayload(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}
