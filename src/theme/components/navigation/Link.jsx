import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { forwardRef } from 'react';

const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

const Link = {
  defaultProps: {
    underline: 'none',
    component: LinkBehavior,
  },
};

export default Link;
