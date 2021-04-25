import { ReactElement } from 'react';
import Badge from './badge';

export default {
  title: 'Badge',
  component: Badge,
};

export const WithChild = (): ReactElement => (
  <Badge>
    <p>Hello components!</p>
  </Badge>
);
