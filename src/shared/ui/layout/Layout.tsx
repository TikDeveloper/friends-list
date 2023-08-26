import { ReactNode } from 'react';
import css from './Layout.module.css';
import { Outlet } from 'react-router-dom';

type LayoutProps = {
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
};

export const Layout = ({ headerSlot, footerSlot }: LayoutProps) => {
  return (
    <div className={css.root}>
      {headerSlot}

      <div className={css.content}>
        <Outlet />
      </div>

      {footerSlot}
    </div>
  );
};
