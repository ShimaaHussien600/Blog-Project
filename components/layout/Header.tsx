import React from "react";
import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
import TabIcon from '../icons/svgs/TabIcon';
import SearchIcon from '../icons/svgs/SearchIcon';

const Header = () => {
  const [openedTab, setOpenedTab] = useState(1);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleTabClick = (e, tab) => {
    // e.preventDefault();
    setOpenedTab(tab);
  }

  return (
    <div className='flex w-full bg-white justify-center'>
      <nav className='flex w-5/6 items-center justify-between sm:justify-between flex-wrap p-4 '>

        <div className='flex justify-start items-center'>
          <button
            className={`${active ? 'text-green' : 'text-black'
              } inline-flex p-3 hover:text-green sm:hidden ml-4 outline-none`}
            onClick={handleClick}>
            <TabIcon />
          </button>

          <Logo />
        </div>

        <div className='flex'>
          <div className='bg-gray-baby w-35 h-35 rounded-full justify-center items-center'>
            <SearchIcon />
          </div>
        </div>
        {/*in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${active ? '' : 'hidden'
            }   w-5/6 sm:inline-flex sm:w-3/4`}
        >
          <div className='sm:inline-flex sm:flex-row sm:ml-auto sm:w-auto sm:items-center items-start  flex flex-col sm:h-auto'>
            <Link href='/'>
              <a className={`${openedTab === 1 ?
                'border-b-2 border-green text-green' : 'text-black'} sm:inline-flex sm:w-auto px-3 py-2 mx-3 font-base items-center justify-center hover:text-green`}
                onClick={(e) => handleTabClick(e, 1)}>
                الرئيسية
              </a>
            </Link>
            <Link href='/article'>
              <a className={`${openedTab === 2 ?
                'border-b-2 border-green text-green' : 'text-black'} sm:inline-flex sm:w-auto px-3 py-2 mx-3 font-base items-center justify-center hover:text-green`}
                onClick={(e) => handleTabClick(e, 2)}
                >
                المقالات
              </a>
            </Link>
            <Link href='/reports'>
              <a className={`${openedTab === 3 ?
                'border-b-2 border-green text-green' : 'text-black'} sm:inline-flex sm:w-auto px-3 py-2 mx-3  font-base items-center justify-center hover:text-green`}
                onClick={(e) => handleTabClick(e, 3)}>
                التقارير والدراسات
              </a>
            </Link>
          </div>
        </div>
        {/* <div className='flex'>
          <div className='bg-gray-baby w-35 h-35 rounded-full justify-center items-center'>
            <SearchIcon />
          </div>
        </div> */}
      </nav>
    </div>
  );
};

export default Header;