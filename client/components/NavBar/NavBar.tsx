'use client';
import React from 'react';
import { Navbar, NavbarBrand } from '@nextui-org/react';
import { Logo } from '../icons';

const NavBar = () => {
  return (
    <Navbar className="w-[88%] h-20 flex flex-row justify-between items-center ">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
    </Navbar>
  );
};
export default NavBar;
