// components/Header.tsx
import { FaHome } from 'react-icons/fa';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <FaHome className={styles.icon} />
        DreamHome Finder
      </h1>
      <p>Stay Next to uhh!!</p>
    </header>
  );
}
