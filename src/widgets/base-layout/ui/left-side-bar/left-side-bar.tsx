import React from 'react';
import Link from 'next/link';

import s from './left-side-bar.module.css';

export const LeftSideBar = () => {
  return (
    <aside className={s.leftSideBar}>
      <nav className={s.nav}>
        <Link href={'/editor/add-video'}>Add video</Link>
        <Link href={'/profile/123'}>Profile</Link>
      </nav>
    </aside>
  );
};
