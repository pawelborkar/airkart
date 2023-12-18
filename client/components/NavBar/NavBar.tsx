'use client';
import Link from 'next/link';
import { Input, Navbar, NavbarBrand } from '@nextui-org/react';
import { Logo } from '../icons';
import { ThemeSwitch } from '../theme-switch';
import { CircleUserRound, Search, ShoppingCart } from 'lucide-react';

const NavBar = () => {
  return (
    <Navbar className="flex justify-evenly">
      <NavbarBrand>
        <Link href="/">
          <Logo/>
        </Link>
      </NavbarBrand>
      <Input
        type="text"
     
        placeholder="Search for product"
        className="w-[50vw] border-slate-700 outline-none focus-visible:outline-none "
        endContent={<Search />}
      />
      <Link href="/cart">
        <ShoppingCart cursor="pointer" />
      </Link>
      <Link href="/profile">
        <CircleUserRound cursor="pointer" />
      </Link>
      <ThemeSwitch />
    </Navbar>
  );
};
export default NavBar;
