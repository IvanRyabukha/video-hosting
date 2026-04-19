import React from 'react';
import Link from 'next/link';
import { Home, CircleUserRoundIcon, LayersPlusIcon, LucideTvMinimalPlay } from 'lucide-react';

import s from './left-side-bar.module.css';

export const LeftSideBar = () => {
  return (
    <aside className={s.leftSideBar}>
      <nav className={s.nav}>
        <Link
          href={'/'}
          className={s.link}
        >
          <Home size={24} aria-hidden/>
          Home
        </Link>
        <Link href={'/profile/123'} className={s.link}>
          <CircleUserRoundIcon size={24} aria-hidden/>
          Profile
        </Link>

        <div className={s.divider}/>

        <Link href={'/editor/add-video'} className={s.link}>
          <LayersPlusIcon size={24} aria-hidden/>
          Add video
        </Link>
        <Link href={'/profile/123'} className={s.link}>
          <LucideTvMinimalPlay size={24} aria-hidden/>
          Your videos
        </Link>
      </nav>
    </aside>
  );
};
