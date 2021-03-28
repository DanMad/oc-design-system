import { FunctionComponent, ReactElement } from 'react';
import '../styles.scss';

interface CoreInterface {
  children: ReactElement;
}

const Core: FunctionComponent<CoreInterface> = ({ children }): ReactElement => (
  <>{children}</>
);

export default Core;
