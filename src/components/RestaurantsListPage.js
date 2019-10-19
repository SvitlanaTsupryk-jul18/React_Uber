import React from "react";
import { connect } from "react-redux";
import { loadRestaurants } from "../store/actions";
import { selectRestaurntsList } from "../store/selectors";
import PropTypes from "prop-types";
import RestaurantCard from "./RestaurantCard";

const DEFAULT_RANGE = "20-30min";

class RestaurantsListPage extends React.Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;
    loadRestaurants();
  }
  render() {
    const { restaurantsList } = this.props;
    return (
      <div className="restaurant-list">
        {restaurantsList.map(restaurant => {
          const {
            uuid,
            title,
            heroImageUrl,
            categories,
            etaRange
          } = restaurant;
          return (
            <RestaurantCard
              key={uuid}
              uuid={uuid}
              title={title}
              imageUrl={heroImageUrl}
              categories={categories}
              etaRange={etaRange ? etaRange.errormessage : DEFAULT_RANGE}
            />
          );
        })}
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

RestaurantsListPage.propTypes = {
  restaurantsListData: PropTypes.arrayOf(PropTypes.shape({})),
  loadRestaurants: PropTypes.func.isRequired
};

RestaurantsListPage.defaultProps = {
  restaurantsListData: []
};
