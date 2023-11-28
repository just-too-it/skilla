import React, { useEffect } from 'react';

import { Layout } from 'components/Layout/';

import styles from './Calls.module.scss';
import { CallTable } from 'components/CallTable';
import { RootState } from 'store/store';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getCalls } from 'store/action-creators/calls';

export const Calls = () => {
  const calls = useAppSelector((state: RootState) => state.calls.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getCalls({
        date_start: new Date('2021-09-01'),
        date_end: new Date('2022-09-03'),
        in_out: 1,
      })
    );
  }, [dispatch]);
  
  return (
    <Layout>
      <div className={styles.page}>
        {
          calls.length > 0 ? <CallTable calls={calls}/> : 'Calls not found'
        }
        
      </div>
    </Layout>
  );
};
