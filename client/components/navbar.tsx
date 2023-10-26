'use client';
import React from 'react';
import { Navbar as NavBar, NavbarBrand } from '@nextui-org/react';
import { Logo } from './icons';
// import { ThemeSwitch } from './theme-switch';

export default function Navbar() {
  return (
    <NavBar className="w-[88%] h-20 flex flex-row justify-between items-center ">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      {/* <ThemeSwitch /> */}
    </NavBar>
  );
}
