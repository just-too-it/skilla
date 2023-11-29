import React, { useEffect, useMemo } from 'react';

import { Layout } from 'components/Layout';
import { CallTable } from 'components/CallTable';
import { RootState } from 'store/store';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getCalls } from 'store/action-creators/calls';
import { Filters } from 'components/Filters';

import styles from './Calls.module.scss';

export const Calls = () => {
  const calls = useAppSelector((state: RootState) => state.calls.data);
  const dispatch = useAppDispatch();

  const { params } = useAppSelector((state) => state.calls);

  const callsData = useMemo(
    () => ({
      in_out: params.callType === 'all' ? null : params.callType === 'incoming' ? 1 : 0,
      date_start: params.dateStart,
      date_end: params.dateEnd,
    }),
    [params]
  );

  useEffect(() => {
    dispatch(getCalls(callsData));
  }, [callsData, dispatch]);

  return (
    <Layout>
      <div className={styles.page}>
        <Filters />
        <CallTable calls={calls} />
      </div>
    </Layout>
  );
};
