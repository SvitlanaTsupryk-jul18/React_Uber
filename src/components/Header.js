import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";

export default class Header extends React.Component {
  state = {
    address: "",
    time: "",
    search: "",
    isMobileSearchVisible: false,
    isMobileDeliveryVisible: false
  };

  toggleSearch = () => {
    this.setState(({ isMobileSearchVisible }) => ({
      isMobileSearchVisible: !isMobileSearchVisible,
      isMobileDeliveryVisible: false
    }));
  };

  toggleDeliveryInfo = () => {
    this.setState(prevState => {
      const { isMobileDeliveryVisible } = prevState;

      return {
        isMobileDeliveryVisible: !isMobileDeliveryVisible,
        isMobileSearchVisible: false
      };
    });
  };

  closeMobile = () => {
    this.setState({
      isMobileSearchVisible: false,
      isMobileDeliveryVisible: false
    });
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    const {
      address,
      time,
      search,
      isMobileDeliveryVisible,
      isMobileSearchVisible
    } = this.state;
    console.log(this.state);

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img
              src="./images/logo.svg"
              alt="Uber EATS"
              className="header__logo"
            />
            <div className="header__delivery-info">
              <Input
                name="address"
                onChange={this.handleChange}
                placeholder="ul. Bolshaya Dmitrov"
                iconUrl="./images/icons/addres.svg"
                value={address}
              />
              <Input
                name="time"
                onChange={this.handleChange}
                placeholder="ASAP"
                type="time"
                value={time}
              />
            </div>
            <div className="header__search">
              <Input
                name="search"
                onChange={this.handleChange}
                placeholder="Search"
                iconUrl="./images/icons/search.svg"
                value={search}
              />
            </div>
            <div className="header__toggle-buttons">
              <button
                type="button"
                className="header__toggle-btn"
                onClick={this.toggleDeliveryInfo}
              >
                <img src="./images/icons/addres.svg" alt="place icon" />
              </button>
              <button
                type="button"
                className="header__toggle-btn"
                onClick={this.toggleSearch}
              >
                <img src="./images/icons/search.svg" alt="search icon" />
              </button>
            </div>
            <a className="header__link" href="/sigh">
              Sign in
            </a>
          </div>
          <div>
            {(isMobileSearchVisible || isMobileDeliveryVisible) && (
              <div className="header__mobile-controls mobile-controls">
                {isMobileSearchVisible && (
                  <Input
                    label="Find"
                    name="search"
                    onChange={this.handleChange}
                    placeholder="Search"
                    iconUrl="./images/icons/search.svg"
                    value={search}
                    isSmall={false}
                  />
                )}
                {isMobileDeliveryVisible && (
                  <>
                    <Input
                      label="Where"
                      name="address"
                      onChange={this.handleChange}
                      placeholder="ul. Bolshaya Dmitrov"
                      iconUrl="./images/icons/addres.svg"
                      value={address}
                      isSmall={false}
                    />
                    <Input
                      label="To"
                      name="time"
                      onChange={this.handleChange}
                      placeholder="ASAP"
                      type="time"
                      value={time}
                      isSmall={false}
                    />
                  </>
                )}
                <button
                  type="button"
                  className="mobile-controls__close"
                  onClick={this.closeMobile}
                >
                  ×
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}
