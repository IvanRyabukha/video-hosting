import React from 'react';
import { Header } from "@/widgets/base-layout/ui/header";
import { LeftSideBar } from "@/widgets/base-layout/ui/left-side-bar";

import s from './base-layout.module.css';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BasicLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className={s.container}>
      <Header />
      <LeftSideBar />
      {children}
    </div>
  );
};
