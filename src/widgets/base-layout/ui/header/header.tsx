import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from './logo.svg';

import s from './header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <Link href="/" className={s.logo}>
        <Image
          src={logo}
          alt={'Company Logo'}
          width={180}
          height={42}
          priority
        />
      </Link>
    </header>
  );
};
