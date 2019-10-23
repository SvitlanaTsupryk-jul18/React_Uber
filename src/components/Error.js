import React from "react";
import PropTypes from "prop-types";

const Error = props => {
  const { message } = props;

  return (
    <div className="error">
      <p className="error__link">{message}</p>
      <a href="/" className="error__link">
        Go to Home
      </a>
    </div>
  );
};

export default Error;

Error.propTypes = {
  message: PropTypes.string
};

Error.defaultProps = {
  message: "Sorry, something went wrong"
};
