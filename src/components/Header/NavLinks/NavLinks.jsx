import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomLink from '../../CustomLink/CustomLink';
import { MdMenu, MdClose } from 'react-icons/md';


const NavLinks = () => {
  const auth = useSelector((state) => state.users.auth);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className='sm:hidden'>
        <MdMenu onClick={() => setVisible(!visible)} className='text-black w-[35px] h-[35px] cursor-pointer'/>
        <div
          className={`duration-300 ${
            visible
              ? 'absolute top-0 left-0 w-[320px] h-full bg-black-800'
              : 'absolute left-[-320px]'
          }`}
        >
          <MdClose
            onClick={() => setVisible(!visible)}
            className='absolute text-black w-[35px] h-[35px] cursor-pointer mt-[20px] ml-[260px]'
          />
        </div>
      </div>
      <div className='hidden sm:block'>
        <CustomLink to='/'>Главная</CustomLink>
        <CustomLink to='/goods'>Товары</CustomLink>
        <CustomLink to='/news'>Новости</CustomLink>
        {auth ? <CustomLink to='/admin'>Администрирование</CustomLink> : ''}
      </div>
    </>
  );
};

export default NavLinks;
