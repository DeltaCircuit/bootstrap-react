import React from "react";
import PropTypes from "prop-types";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = ({ children, items, ...rest }) => {
  const breadCrumbItems = items.map(item => (
    <BreadcrumbItem {...item} key={item.content} />
  ));
  return (
    <nav aria-label="breadcrumb" {...rest}>
      <ol className="breadcrumb">{children || breadCrumbItems}</ol>
    </nav>
  );
};

Breadcrumb.Item = BreadcrumbItem;

Breadcrumb.propTypes = {
  children: PropTypes.node,
  items: (props, prop, component) => {
    const { children, items } = props;
    if (children && items.length >= 1) {
      return new Error(
        `You cannot have children and items prop at the same time. children have higher precedence, Please check your ${component} component`
      );
    }
  }
};

Breadcrumb.defaultProps = {
  items: []
};

export default Breadcrumb;
