import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@firstclasspostcodes/sw14';

import useLink from '../../../hooks/useLink';

export const Component = ({ children, ...props }) => {
  const linkProps = useLink(props);

  return (
    <Typography.Text as="a" {...linkProps}>
      {children}
    </Typography.Text>
  );
};

Component.displayName = 'CMS.Link';

Component.propTypes = {
  children: PropTypes.any.isRequired,
};
