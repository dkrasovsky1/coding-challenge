'use client';

import { useEffect } from 'react';

interface AuthCodeProps {
  searchParams: { code: string };
}

export default function AuthCode({ searchParams }: AuthCodeProps) {
  useEffect(() => {
    console.log('searchParams: ', searchParams);

    const { code } = searchParams;

    if (code) {
      fetch('/api/auth/connect', {
        method: 'POST',
        body: JSON.stringify({ code }),
      })
        .then(async (res) => {
          if (res.ok) {
            const data = await res.json();

            console.log('res:', data);
          }

          console.log(res);
        })
        .finally(() => {
          // window.close();
        });
    }
  }, [searchParams]);

  return <div>AuthCode: {searchParams.code}</div>;
}
