import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import styles from './PhotoCard.module.scss';

interface PhotoCardProps {
  className?: string;
  color: string;
  image: string;
  code: string;
  qrCodeImage: string;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  className,
  color,
  image,
  code,
  qrCodeImage,
}) => {
  return (
    <div
      className={clsx(styles.root, className)}
      style={{ backgroundColor: color }}
    >
      <Image
        className={styles.image}
        src={image}
        alt="Photo image"
        width={187}
        height={223}
      />
      <div className={styles.footer}>
        <span className={styles.caption}>Зроби цікаве фото</span>
        <div className={styles.codeWrap}>
          <button className={styles.code} style={{ color }}>
            {code}
          </button>
          <Image
            role="button"
            tabIndex={0}
            className={styles.qrCode}
            src={qrCodeImage}
            alt="QR code image"
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};
