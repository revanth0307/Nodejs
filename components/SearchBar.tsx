// components/SearchBar.tsx
'use client';

import { FormEvent } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: hook up your search logic here
    console.log('Search submitted');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="Location (e.g., Hyderabad)" />
      <input type="number" placeholder="Min Price (₹)" />
      <input type="number" placeholder="Max Price (₹)" />
      <select>
        <option>Bedrooms</option>
        <option value="1">1 BHK</option>
        <option value="2">2 BHK</option>
        <option value="3">3 BHK</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}
