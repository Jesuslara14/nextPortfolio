import Link from 'next/link';
import styles from '../../styles/components/navbar.module.css';

export default function NavBar({ links }){
    return(
    <>
        <nav className={styles.navbarTop}>
            <div className={styles.navbarTitle}>
                Jesus Lara - Profile
            </div>
            <div className={styles.navbarLinksTop}>
                {links.map((link, index) => (
                    <div className={styles.navbarLink} key={index}>
                        <Link href={link.path}>{link.name}</Link>
                    </div>
                ))}
            </div>
        </nav>
    </>
    )
}