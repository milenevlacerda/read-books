import React, { Fragment } from 'react';
import { node } from 'prop-types';

import Head from '@/components/Head';

export default function App({ children }) {
  return (
    <Fragment>
      <Head
        titleTemplate="%s - "
        defaultTitle=""
      />
      <main>{children}</main>
    </Fragment>
  );
}

App.propTypes = {
  children: node,
};
