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
      name,
      isSmall,
      label
    } = this.props;

    const inputWrapper = cx("control__input-wrapper", {
      "control__input-wrapper--focused": this.state.isFocused,
      [className]: !!className
    });

    const inputClass = cx("control__input", {
      "control__input--small": isSmall
    });

    return (
      <label className="control" onClick={this.focus}>
        {label && <p className="control">{label}</p>}
        <div className={inputWrapper}>
          {iconUrl && (
            <img className="control__icon" src={iconUrl} alt={placeholder} />
          )}
          <input
            ref={this.inputRef}
            className={inputClass}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </div>
      </label>
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
  placeholder: PropTypes.string,
  label: PropTypes.string,
  isSmall: PropTypes.bool
};

Input.defaultProps = {
  iconUrl: "",
  type: "text",
  placeholder: "",
  className: "",
  label: "",
  isSmall: true
};
