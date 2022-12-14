import { Button } from '@mui/material';
import NavBar from '../components/NavBar';
import { Comfortaa, Ledger } from '@next/font/google';

const comfortaa = Comfortaa({ subsets: ['latin'] });
const ledger = Ledger({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center my-24">
        <h1
          className={`${comfortaa.className} text-6xl text-primary font-semibold mb-5`}
        >
          Café Kuya
        </h1>
        <p className={`${ledger.className}`}>Coffee Shop in Brossard</p>
        <p className={`${ledger.className}`}>Opening at 8:00 AM tomorrow</p>
        <button
          className={`${ledger.className} bg-primary hover:bg-hover text-white mt-5 h-12 w-44 px-6 py-2 px-4 rounded`}
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
}
