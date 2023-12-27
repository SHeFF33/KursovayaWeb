import LogUser from './LogUser/LogUser';
import NavLinks from './NavLinks/NavLinks';
import www from '../pictures/www.jpg'

const Header = () => {
  return (
    <header className='bg-white-600 '>
      <div className='h-[80px] flex justify-between items-center max-w-[1280px] mx-auto px-10'>
        <div className='logo'><img src={www} alt="logo" /></div>
        <NavLinks />
        <div className='flex items-center'>
          <LogUser/>
        </div>
      </div>
    </header>
  );
};

export default Header;
