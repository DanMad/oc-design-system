import { isNumber, toInteger } from 'lodash';
import { FunctionComponent } from 'react';
import { BEM } from '@open-colleges/core';
import '../styles.scss';

type BadgeModifier = '' | 'error' | 'success';

type BadgeProps = {
  className?: string;
  modifier?: BadgeModifier;
  style?: React.CSSProperties;
  val?: number | string;
};

const { getBlock, getModifier } = BEM('badge');

const toBadgeLabel = (val: number | string): string => {
  let badgeLabel: string;

  if (isNumber(val) || /^\d+$/.test(val)) {
    const num: number = toInteger(val);

    badgeLabel = `${num}`;

    if (num > 9) badgeLabel = '9+';
    if (num > 99) badgeLabel = '99+';
  } else {
    badgeLabel = val.trim();
  }

  return badgeLabel;
};

const Badge: FunctionComponent<BadgeProps> = ({
  className,
  modifier,
  style,
  val = 0,
}: BadgeProps) => {
  let classNames: string = getBlock();

  if (modifier) classNames += ` ${getModifier(modifier)}`;
  if (className) classNames += ` ${className}`;

  return (
    <span className={classNames} style={style} unselectable="on">
      {toBadgeLabel(val)}
    </span>
  );
};

Badge.defaultProps = {
  className: '',
  modifier: '',
  style: {},
  val: 0,
};

export { Badge as default };
