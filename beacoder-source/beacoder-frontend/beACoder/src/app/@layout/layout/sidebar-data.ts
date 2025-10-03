import { NavItem } from '../full/sidebar/nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'solar:atom-line-duotone',
    route: '/user/dashboard',
  },
  {
    displayName: 'Course',
    iconName: 'solar:add-circle-line-duotone',
    route: '/user/course',
    chip: false,
    external: false,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: '+',
  },
  {
    displayName: 'Assignment',
    iconName: 'solar:cardholder-outline',
    route: '/user/assignment',
    chip: false,
    external: false,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: '+',
  },
  {
    displayName: 'Discussion',
    iconName: 'solar:widget-add-line-duotone',
    route: '/user/discussion',
    chip: false,
    external: false,
    chipClass: 'bg-light-secondary text-secondary',
    chipContent: '+',
  },
  {
    divider: true,
    navCap: 'More',
  },
  {
    displayName: 'Invoice',
    iconName: 'solar:bill-list-line-duotone',
    route: '/invoice',
    chip: true,
    children: [
      {
        displayName: 'List',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/list',
        chip: true,
        external: true,
        chipClass: 'bg-light-secondary text-secondary',
        chipContent: '*',
      },
    ],
  },
];
