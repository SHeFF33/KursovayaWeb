import React from 'react';
import { Link } from "react-router-dom";
import data from '../../server/db.json';

export default function NewsPage() {
  return (
    <main>
      <div className='p-4 flex flex-wrap gap-4 justify-center'>
        {data.news.map((item) => (
          <div key={item.id} className='border-2 border-black dark:border-gray-300 p-4 w-[300px] min-h-[300px] hover:scale-105 duration-200'>
            <Link to={`/news/${item.id}`}>
              <img src={item.image} alt={item.title} className='object-cover max-w-[250px]' />
              <div className='text-center m-0 mt-2 text-[20px] dark:text-white'>{item.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}