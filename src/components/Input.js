import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import cx from "classnames";

class Input extends React.Component {
  state = {
    isFocused: false
  };

  inputRef = React.createRef();

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  focus = () => {
    this.inputRef.current.focus();
  };

  render() {
    const {
      iconUrl,
      value,
      onChange,
      type,
      placeholder,
      className,
      name
    } = this.props;

    const rootClass = cx("control", {
      "control--focused": this.state.isFocused,
      [className]: !!className
    });

    return (
      <div className={rootClass} onClick={this.focus} role="presentation">
        {iconUrl && (
          <img className="control__icon" src={iconUrl} alt={placeholder} />
        )}
        <input
          ref={this.inputRef}
          className="control__input"
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  iconUrl: "",
  type: "text",
  placeholder: ""
};
