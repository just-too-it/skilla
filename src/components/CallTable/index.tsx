import React, { FC, useEffect } from 'react';
import type { RootState } from '../../store/store';
import { getCalls } from 'store/action-creators/calls';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import styles from './CallTable.module.scss';
import { callTableColumns } from 'components/CallTable/data';
import clsx from 'clsx';
import { Call } from 'services/calls/calls.model';
import { getTimeFromDate, getTimeFromSeconds } from 'core/getTimeFromDate';
import { Avatar } from 'components/ui/Avatar';
import { ReactComponent as InCallIcon } from 'assets/icons/inCall.svg';
import { ReactComponent as OutCallIcon } from 'assets/icons/outCall.svg';

interface CallTableProps {
  calls: Call[];
}
export const CallTable: FC<CallTableProps> = ({ calls }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.header}>
          {callTableColumns.map((column) => {
            return (
              <th key={column.id} className={clsx(styles.column, styles[`column_${column.id}`])}>
                {column.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {calls.map((call) => (
          <tr key={call.id} className={styles.row}>
            <td className={clsx(styles.cell, styles['cell_in-out'])}>
              {call.in_out ? <InCallIcon /> : <OutCallIcon />}
            </td>
            <td className={clsx(styles.cell, styles.cell_time)}>{getTimeFromDate(call.date)}</td>
            <td className={clsx(styles.cell, styles['cell_person-avatar'])}>
              <Avatar img={call.person_avatar} name={call.person_surname} />
            </td>
            <td className={clsx(styles.cell, styles['cell_number'])}>
              {call.in_out ? call.from_number : call.to_number}
            </td>
            <td className={clsx(styles.cell, styles['cell_source'])}>
              {call.source}
            </td>
            <td className={clsx(styles.cell, styles['cell_estimation'])}>
              {call.estimation}
            </td>
            <td className={clsx(styles.cell, styles['cell_duration'])}>
              {getTimeFromSeconds(call.time)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
