import React, { lazy, Suspense } from 'react';
import LazyFallback from '../components/elements/LazyFallback';

const Suspensed = (Element) => function suspense(props) {
  return (
    <Suspense fallback={<LazyFallback />}>
      <Element {...props} />
    </Suspense>
  );
};

export default {
  Home: Suspensed(lazy(() => import('./Home'))),
  List: Suspensed(lazy(() => import('./List'))),
  Details: Suspensed(lazy(() => import('./Details'))),
};
