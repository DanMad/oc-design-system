import { FunctionComponent, ReactElement } from 'react';
import { greet } from '@your-scope/core';
import './component.scss';

interface ComponentInterface {
  name?: string;
}

const Component: FunctionComponent<ComponentInterface> = ({
  name = '',
}): ReactElement => (
  <p className={`text${name && ' with-name'}`}>{greet(name)}</p>
);

export default Component;
