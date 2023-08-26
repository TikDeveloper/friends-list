/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense, ElementType } from 'react';
import { Spinner } from 'react-bootstrap';
import css from './Loadable.module.css';

export const Loadable = (Component: ElementType) => {
  return (props: any) => {
    return (
      <Suspense
        fallback={
          <div className={css.wrapper}>
            <Spinner animation="border" role="status" />
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    );
  };
};
