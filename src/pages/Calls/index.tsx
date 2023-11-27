import React from 'react';

import { Layout } from 'components/Layout/';

import styles from './Calls.module.scss';
import { CallTable } from 'components/CallTable';

export const Calls = () => {
  return (
    <Layout>
      <div className={styles.page}>
        Calls
        <CallTable />
      </div>
    </Layout>
  );
};
