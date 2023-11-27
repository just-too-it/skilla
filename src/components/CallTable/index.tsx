import React, { useEffect } from 'react';
import type { RootState } from '../../store/store';
import { getCalls } from 'store/action-creators/calls';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const CallTable = () => {
  const calls = useAppSelector((state: RootState) => state.calls.calls);
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
    <div>
      <div>{JSON.stringify(calls, null, 2)}</div>
    </div>
  );
};
