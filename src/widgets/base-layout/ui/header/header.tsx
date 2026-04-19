import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Plus } from 'lucide-react';

import s from './header.module.css';

interface HeaderProps {
  profileId: string;
}

export const Header: React.FC<HeaderProps> = ({ profileId }) => {
  return (
    <header className={s.header}>
      <Link href="/" className={s.logo}>
        <Image
          src="/logo.svg"
          alt={'Company Logo'}
          width={180}
          height={42}
          priority
        />
      </Link>


      <div className={s.rightSide}>
        <Link
          href={"/editor/add-video"}
          className={s.createLink}
        >
          <Plus size={18} color="white"/>
          Create
        </Link>

        <Link
          href={`/profile/${profileId}`}
          className={s.profileLink}
        >
          <div className={s.hidden}>Go to your profile</div>
        </Link>
      </div>
    </header>
  );
};
