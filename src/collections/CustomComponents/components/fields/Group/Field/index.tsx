import React from "react";
import PropTypes from "prop-types";
import { Group } from "payload/components/forms";

const CustomGroup: React.FC<any> = (props) => (
  <div className="custom-group">
    <Group {...props} />
  </div>
);

CustomGroup.defaultProps = {
  value: "",
};

CustomGroup.propTypes = {
  value: PropTypes.string,
};

export default CustomGroup;
