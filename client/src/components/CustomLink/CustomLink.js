import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
  >
    <Link {...props} />
  </div>
));

export default CustomRouterLink;
