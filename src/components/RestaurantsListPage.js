import React from "react";
import { connect } from "react-redux";
import { loadRestaurants } from "../store/actions";
import { selectRestaurntsList } from "../store/selectors";

class RestaurantsListPage extends React.Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;
    loadRestaurants();
  }
  render() {
    const { restaurantsList } = this.props;
    return (
      <div className="list">
        <pre>{JSON.stringify(restaurantsList)}</pre>
      </div>
    );
  }
}

const mapState = state => {
  return {
    restaurantsList: selectRestaurntsList(state)
  };
};

const mapDispatch = { loadRestaurants };

export default connect(
  mapState,
  mapDispatch
)(RestaurantsListPage);
