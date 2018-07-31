import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },  
  {
    title: 'Orden de Compra',
    icon: 'nb-compose',
    children: [
      {
        title: 'Orden de Compra',
        link: '/pages/ordenCompra',
      },      
    ],
  },  
];
