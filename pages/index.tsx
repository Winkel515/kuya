import NavBar from '../components/NavBar';
import { Comfortaa, Ledger } from '@next/font/google';
import Image from 'next/image';
import Review from '../components/Review';

const comfortaa = Comfortaa({ subsets: ['latin'] });

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
        <p className={`${comfortaa.className}`}>Coffee Shop in Brossard</p>
        <p className={`${comfortaa.className}`}>Opening at 8:00 AM tomorrow</p>
        <button
          className={`${comfortaa.className} bg-primary hover:bg-hover text-white mt-5 h-12 w-52 w-52 h-14 px-4 rounded`}
        >
          CONTACT US
        </button>
        <Image
          className="my-20"
          src={'/mainImg.jpeg'}
          width={1000}
          height={500}
          alt="coffee"
        />
        <div className="flex flex-col items-center mx-20">
          <hr className="bg-black my-5 w-14 h-0.5 bg-black rounded border-0" />
          <h2 className={`${comfortaa.className} mb-10`}>TESTIMONIALS</h2>
          <div className="flex">
            <Review
              author="Christopher C"
              text="Phil and the crew are really amazing at what they do. This place
        is a must. Prices are more than fair considering how unique of a product
        and experience they are delivering here daily. I mean, the strip mall
        was empty, but Cafe Kuya was packed! What does that tell you about this
        place? This place is great for students and families. I recommend the
        ube iced latte as a drink and for food; everything. Amazing atmosphere,
        love this place! God bless. John 3:16"
            />
            <Review
              author="Tara S"
              text="Not only do they serve amazing coffee and food, the staff couldn't be nicer. They always make you feel welcomed and take the time to ask how your day is going. So glad to see a sweet locally owned cafe in Brossard!"
            />
            <Review
              author="Charles N"
              text="Wonderful local café where family, friends and newcomers can come refuel on their favourite coffee brew, grab a bite with Filipino inspired sandwiches and wonderful dessert pies!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
