import  { Suspense } from 'react';

import { Spinner } from '@/views';

const Loadable = (Component: any) => (props: any) => (
  <Suspense fallback={<Spinner />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
