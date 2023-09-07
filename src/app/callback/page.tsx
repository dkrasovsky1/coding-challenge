'use client';

import { useEffect, useState } from 'react';
import styles from './CallbackPage.module.scss';

interface AuthCodeProps {
  searchParams: { code: string };
}

export default function CallbackPage({ searchParams }: AuthCodeProps) {
  const { code } = searchParams;
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (code) {
      fetch('/api/auth/code', {
        method: 'POST',
        body: JSON.stringify({ code }),
      })
        .then(async (res) => {
          const data = await res.json();

          if (!data.success) {
            setIsError(true);
          }
        })
        .finally(() => {
          setTimeout(() => {
            window.close();
          }, 1500);
        });
    }
  }, [code]);

  return (
    <h2 className={styles.title}>
      {isError ? 'Something went wrong!' : 'Processing...'}
    </h2>
  );
}
