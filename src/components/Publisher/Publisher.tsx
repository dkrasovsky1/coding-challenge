'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

import { Card } from '@/components/Card';
import { PhotoCard } from '@/components/PhotoCard';
import { ColorPicker } from '@/components/ColorPicker';
import { IconButton } from '@/components/IconButton';

import styles from './Publisher.module.scss';

import mockPhotoUrl from '@/assets/images/mock-photo.png';
import mockQRImageUrl from '@/assets/images/mock-qr-code.svg';

import CameraIcon from '@/assets/icons/camera.svg?inline';
import CheckMarkIcon from '@/assets/icons/check-mark.svg?inline';
import InstagramHyperlinkIcon from '@/assets/icons/instagram-hyperlink.svg?inline';

const COLORS = ['#FFC4DA', '#B8FCCE', '#FFE4E4', '#E6D3FF', '#BDE3FF'];

interface PublisherProps {
  className?: string;
}

export const Publisher: React.FC<PublisherProps> = ({ className }) => {
  const [currentColor, setCurrentColor] = useState(COLORS[0]);

  const handleTakePhoto = () => {};

  const handlePublish = () => {};

  return (
    <Card className={clsx(styles.root, className)}>
      <PhotoCard
        className={styles.photoCard}
        color={currentColor}
        code="#ZFQ9F1"
        qrCodeImage={mockQRImageUrl.src}
        image={mockPhotoUrl.src}
      />
      <ColorPicker
        className={styles.colorPicker}
        currentColor={currentColor}
        colors={COLORS}
        onChange={setCurrentColor}
      />
      <div className={styles.actions}>
        <IconButton
          className={styles.takePhotoBtn}
          icon={<CameraIcon />}
          onClick={handleTakePhoto}
        />
        <IconButton
          className={styles.instaLink}
          icon={<InstagramHyperlinkIcon />}
          href="https://www.instagram.com"
        />
        <IconButton
          className={styles.publishBtn}
          icon={<CheckMarkIcon />}
          onClick={handlePublish}
        />
      </div>
    </Card>
  );
};
