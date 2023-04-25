import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customfunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="Bottom Center">
    <button
      type='button'
      onClick={customfunc}
      style={{ color }}
      className='relative text-x1 rounded-full p-3 hover:bg-light-gray'
    >
      <span
        className='absolute inline-flex h-2 w-2 right-2 top-2  rounded-full '
        style={{ background: dotColor }}
      ></span>
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    setActiveMenu,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title='Menu'
        customfunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className='flex '>
        <NavButton
          title='Cart'
          customfunc={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title='Chat'
          customfunc={() => handleClick('Chat')}
          color={currentColor}
          dotColor={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title='Notifications'
          customfunc={() => handleClick('Notifications')}
          color={currentColor}
          dotColor={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent position='BottomCenter' content='Profile'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('Profile')}
          >
            <p>
              <span className='text-gray-400 text-14 '>Hi,</span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>
                Mohammed
              </span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14 ' />
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;
