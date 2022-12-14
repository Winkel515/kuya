import { Button } from '@mui/material';
import NavBar from '../components/NavBar';
import { Comfortaa, Ledger } from '@next/font/google';
import Image from "next/image";

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
        <Button
          variant="contained"
          className={`${ledger.className} bg-primary mt-5 h-12 w-44 px-6 m-2`}
          sx={{
            '&:hover': {
              backgroundColor: 'grey',
            },
          }}
        >
          CONTACT US
        </Button>
        <Image
          src={'https://lh3.googleusercontent.com/p/AF1QipM8dnS3e5UhVqU7vFQzJ04UcFopoUdm3tVX7vpx=w1080-h608-p-no-v0'}
          alt='kuya coffee cup'
          className='my-20'
          width = {800}
          height= {800}
        />
      </div>
      <div>
      </div>
    </div>
  );
}
