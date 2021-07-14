import { ReactElement } from 'react';
import Badge from './badge';

const styles: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default {
  title: 'Badge',
  component: Badge,
};

export const SmallStrictNumber = (): ReactElement => (
  <Badge style={styles} val={4} />
);
export const SmallLooseNumber = (): ReactElement => (
  <Badge style={styles} val="4" />
);
export const MediumStrictNumber = (): ReactElement => (
  <Badge style={styles} val={16} />
);
export const MediumLooseNumber = (): ReactElement => (
  <Badge style={styles} val="16" />
);
export const LargeStrictNumber = (): ReactElement => (
  <Badge style={styles} val={100} />
);
export const LargeLooseNumber = (): ReactElement => (
  <Badge style={styles} val="100" />
);

export const String = (): ReactElement => (
  <Badge style={styles} val="  Hello World  " />
);
export const StringWithNumber = (): ReactElement => (
  <Badge style={styles} val="100 Messages" />
);

export const HasError = (): ReactElement => (
  <Badge style={styles} modifier="error" />
);
export const HasSuccess = (): ReactElement => (
  <Badge style={styles} modifier="success" />
);
