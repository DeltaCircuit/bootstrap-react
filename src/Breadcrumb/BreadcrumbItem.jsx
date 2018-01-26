import React from 'react';
import PropTypes from 'prop-types';

const BreadcrumbItem = ({
  children, className, active, content, ...rest
}) => {
  const classes = `breadcrumb-item ${active ? 'active' : ''} ${className}`;
  return (
    <li className={classes.trim()} {...rest}>
      {children || content}
    </li>
  );
};

BreadcrumbItem.displayType = 'BreadcrumbItem';

BreadcrumbItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
  content: (props, propName, component) => {
    const { children, content } = props;
    if (children && content) {
      return new Error(`You cannot have children and content prop at the same time. children have higher precedence, Please check your ${component} component`);
    }
  },
};

BreadcrumbItem.defaultProps = {
  active: false,
  className: '',
};

export default BreadcrumbItem;
