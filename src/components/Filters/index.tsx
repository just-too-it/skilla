import React from 'react';

import { Selector } from 'components/ui/Selector';
import { typesOfCalls } from 'components/Filters/data';
import { useAppDispatch } from 'store/hooks';
import { setParamsCallType } from 'store/entities/calls/callsSlice';

import styles from './Filters.module.scss';

export const Filters = () => {
  const dispatch = useAppDispatch();
  const handleTypesOfCalls = (value: string) => {
    dispatch(setParamsCallType(value));
  };
  return (
    <section className={styles.filters}>
      <Selector data={typesOfCalls} onChange={handleTypesOfCalls} />
    </section>
  );
};
