import { MenuItemType } from 'components/Sidebar/Menu/MenuItem/MenuItem.types';
import {
  ResultIcon,
  OrdersIcon,
  MailIcon,
  CallsIcon,
  PartnersIcon,
  DocumentsIcon,
  PartnerIcon,
  ReportsIcon,
  LibraryIcon,
  SettingsIcon,
} from 'components/icons';

export const mockMenu: MenuItemType[] = [
  {
    id: 1,
    name: 'Итоги',
    Icon: ResultIcon,
    link: '#',
  },
  {
    id: 2,
    name: 'Заказы',
    Icon: OrdersIcon,
    link: '#',
  },
  {
    id: 3,
    name: 'Сообщения',
    Icon: MailIcon,
    link: '#',
  },
  {
    id: 4,
    name: 'Звонки',
    Icon: CallsIcon,
    link: '/calls',
    isNew: true,
  },
  {
    id: 5,
    name: 'Контрагенты',
    Icon: PartnersIcon,
    link: '#',
  },
  {
    id: 6,
    name: 'Документы',
    Icon: DocumentsIcon,
    link: '#',
  },
  {
    id: 7,
    name: 'Исполнители',
    Icon: PartnerIcon,
    link: '#',
  },
  {
    id: 8,
    name: 'Отчеты',
    Icon: ReportsIcon,
    link: '#',
  },
  {
    id: 9,
    name: 'База знаний',
    Icon: LibraryIcon,
    link: '#',
  },
  {
    id: 10,
    name: 'Настройки',
    Icon: SettingsIcon,
    link: '#',
  },
];
