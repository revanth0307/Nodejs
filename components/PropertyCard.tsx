// components/PropertyCard.tsx
import { FaMapMarkerAlt, FaBed } from 'react-icons/fa';
import styles from './PropertyCard.module.css';

export interface Property {
  title: string;
  city: string;
  address: string;
  beds: number;
  price: number;
}

export default function PropertyCard({ title, city, address, beds, price }: Property) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p><FaMapMarkerAlt /> {city}</p>
      <p>{address}</p>
      <p><FaBed /> {beds} Bedrooms</p>
      <p className={styles.price}>₹{price}/mo</p>
    </div>
  );
}
