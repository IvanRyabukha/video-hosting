import React from 'react';
import Image from 'next/image';
import notFound from './not-found.png';

import s from './not-found-page.module.css';

export const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <Image
        src={notFound}
        alt="Page not found"
        priority
        fill
        sizes="(max-width: 768px) 100vw, calc(100vw - 300px)"
        className={s.image}
      />
    </div>
  );
};
