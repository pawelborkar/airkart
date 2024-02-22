'use client';
import Link from 'next/link';
import { Input, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import { Logo } from '../icons';
import { ThemeSwitch } from '../theme-switch';
import { CircleUserRound, Search, ShoppingCart } from 'lucide-react';

const NavBar = () => {
  return (
    <Navbar maxWidth="full" className="flex justify-evenly py-2">
      <NavbarContent>
        <NavbarContent>
          <NavbarBrand className="max-w-xs h-full mx-5 flex justify-center">
            <Link href={'/'}>
              <Logo />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="center">
          <Input
            type="text"
            placeholder="Search for product"
            className="w-[42vw] border-slate-700 outline-none focus-visible:outline-none"
            endContent={<Search />}
          />
        </NavbarContent>
        <NavbarContent justify="end">
          <Link href="/cart">
            <ShoppingCart cursor="pointer" />
          </Link>
          <Link href="/profile">
            <CircleUserRound cursor="pointer" />
          </Link>
          <ThemeSwitch />
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
};
export default NavBar;
