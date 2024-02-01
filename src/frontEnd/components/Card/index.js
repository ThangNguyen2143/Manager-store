import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card({
  href,
  to,
  children,
  leftIcon,
  rightIcon,
  className,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  onClick,
  ...passProp
}) {
  let Comp = 'Card';
  const props = {
    onClick,
    ...passProp,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  const classes = cx('wrapper', {
    primary,
    outline,
    rounded,
    disabled,
    text,
    small,
    large,
    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon-left')}>{leftIcon}</span>}
      <span className={cx('titile')}> {children}</span>
      {rightIcon && <span className={cx('icon-right')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Card;
