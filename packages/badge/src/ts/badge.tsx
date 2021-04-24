import { FunctionComponent, ReactElement } from 'react';
import '../styles.scss';

interface FirstComponentInterface {
  children: ReactElement;
}

const FirstComponent: FunctionComponent<FirstComponentInterface> = ({
  children,
}): ReactElement => <>{children}</>;

export default FirstComponent;
