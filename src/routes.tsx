import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'ACEM',
    path: '/',
    element: <HomePage />
  },
  {
    name: 'Event Details',
    path: '/event/:id',
    element: <EventDetailPage />
  }
];

export default routes;
