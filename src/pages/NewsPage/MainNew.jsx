import React from 'react';
import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainNew = ({ title, content}) => {

  return (
    <div>
    <div className='px-8 py-6 flex flex-col justify-center'>
      <h1 className='text-[20px] text-center dark:text-white'>{title}</h1>
      <h2 className='dark:text-white'>{content}</h2>
    </div>
    </div>
  );
};

export default MainNew;