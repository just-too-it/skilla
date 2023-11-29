import React, { FC } from 'react';
import { Select as AntSelect } from 'antd';

import { ReactComponent as DropdownIcon } from 'assets/icons/dropdown.svg';

import './Selector.scss';

interface SelectorProps {
  data: {
    value: string;
    label: string;
  }[];
  onChange: (value: string) => void;
}

export const Selector: FC<SelectorProps> = ({ data, onChange }) => {
  return (
    <AntSelect
      defaultValue="all"
      bordered={false}
      rootClassName={'selector'}
      popupClassName={'popup'}
      onChange={onChange}
      suffixIcon={<DropdownIcon fill="#ADBFDF" />}
      options={data}
    />
  );
};
