import styles from '../../styles/components/profilecard.module.css';
import Image from 'next/image';

export default function ProfileCard(){
    return(
        <div className={styles.card}>
        <span>
          <h1>Jesus Lara</h1>
          <p className={styles.subtitle}>Web Developer</p>
        </span>
        <Image
          src={'/jesuslara.png'}
          width={150}
          height={175}
          className={styles.profileImage}
        />
      </div>
    )
}