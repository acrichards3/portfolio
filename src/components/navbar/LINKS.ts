interface Link {
    id: number;
    name: string;
    url: string;
}

export const LINKS: Link[] = [
  {
    id: 0,
    name: 'Home',
    url: '/',
  },
  {
    id: 1,
    name: 'Projects',
    url: '/projects',
  },
  {
    id: 2,
    name: 'About Me',
    url: '/about',
  },
];
