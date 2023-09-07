export class AuthService {
  private readonly baseApiUrl: string = '/api/auth';

  async getNonce(): Promise<string> {
    const response = await fetch(`${this.baseApiUrl}/nonce`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { nonce } = await response.json();

    return nonce;
  }

  async login(message: string, signature: string): Promise<void> {
    const response = await fetch(`${this.baseApiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, signature }),
    });

    return response.json();
  }

  async logout(): Promise<void> {
    return;
  }
}
