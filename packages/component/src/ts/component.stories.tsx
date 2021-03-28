import { ReactElement } from 'react';
import FirstComponent from './component';

export default {
  title: 'Component',
  component: FirstComponent,
};

export const WithChild = (): ReactElement => (
  <FirstComponent>
    <p>Hello components!</p>
  </FirstComponent>
);
