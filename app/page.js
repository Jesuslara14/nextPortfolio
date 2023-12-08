import Image from 'next/image'
import styles from '../styles/pages/home.module.css'
import ProfileCard from '@/components/profilecard/profilecard'

export default function Home() {
  return (
    <div className={styles.description}>
      <ProfileCard />
      <hr></hr>
      <p className={styles.paragraph}>
        Est dolor consequat eu ex. Do deserunt reprehenderit et proident. Culpa est qui duis consectetur nisi.
        Nisi cupidatat dolor duis magna et nisi cupidatat mollit dolor Lorem. Nostrud laboris duis do nulla irure adipisicing laboris aute irure laborum. 
        Id dolor eu eiusmod Lorem sint aute ad ut elit labore. Amet adipisicing qui dolore eu laborum proident non ex nostrud voluptate amet est ad. 
        Et amet ex occaecat laborum laboris nisi culpa sint tempor non mollit nostrud et. Deserunt elit velit commodo veniam ullamco do fugiat sit magna commodo adipisicing. 
        Ea nostrud occaecat nostrud reprehenderit.
      </p>
    </div>
  )
}
