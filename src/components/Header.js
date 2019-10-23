import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";

export default class Header extends React.Component {
  state = {
    address: "",
    time: "",
    search: ""
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    const { address, time, search } = this.state;
    console.log(this.state);

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img src="./images/logo.svg" alt="Uber EATS" />
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
            <Input
              name="search"
              onChange={this.handleChange}
              placeholder="Search"
              iconUrl="./images/icons/search.svg"
              className="header__search"
              value={search}
            />
            <a className="header__link" href="/sigh">
              Sign in
            </a>
          </div>
        </div>
      </header>
    );
  }
}
