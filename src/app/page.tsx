// app/page.tsx
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import PropertyCard, { Property } from '../../components/PropertyCard';
import styles from './page.module.css';

const sampleData: Property[] = [
  { title: '3BHK Home in Karimnagar', city: 'Karimnagar', address: '90 Park Lane, Karimnagar', beds: 3, price: 8527 },
  { title: '2BHK Home in Mancherial', city: 'Mancherial', address: '77 Park Lane, Mancherial', beds: 2, price: 4660 },
  // …add more or fetch dynamically…
];

export default function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <section className={styles.grid}>
        {sampleData.map((p, i) => <PropertyCard key={i} {...p} />)}
      </section>
    </>
  );
}
