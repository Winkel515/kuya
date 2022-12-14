import React from 'react';
import StarRating from './StarRating';
import { Comfortaa } from '@next/font/google';

const comfortaa = Comfortaa({ subsets: ['latin'] });

function Review({ text, author }: { text: string; author: string }) {
  return (
    <div className={`${comfortaa.className} flex flex-col mx-10 flex-1 my-10`}>
      <div className="flex">
        <StarRating />
        <div className="w-5"></div>
        <span className={`${comfortaa.className} text-slate-400`}>
          7 months ago
        </span>
      </div>
      <br />
      <p>&ldquo;{text}&rdquo;</p>
      <br />
      <p>- {author}</p>
    </div>
  );
}

export default Review;
