'use client';
import React from 'react';
import {
  Navbar as NavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { Logo } from './icons';

export default function Navbar() {
  return (
    <NavBar className="w-[88%] h-20 flex flex-row justify-between items-center ">
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">AIRKART.co</p>
      </NavbarBrand>
    </NavBar>
  );
}
