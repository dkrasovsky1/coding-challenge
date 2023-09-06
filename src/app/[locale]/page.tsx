import { Publisher } from '@/components/Publisher';
import { SocialConnector } from '@/components/SocialConnector';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.root}>
      <SocialConnector className={styles.socialConnector} />
      <Publisher className={styles.publisher} />
    </div>
  );
}
