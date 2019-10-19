import React from "react";
import { connect } from "react-redux";
import { loadRestaurants } from "../store/actions";

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
    restaurantsList: state.restaurantsListData
  };
};

const mapDispatch = { loadRestaurants };

export default connect(
  mapState,
  mapDispatch
)(RestaurantsListPage);
