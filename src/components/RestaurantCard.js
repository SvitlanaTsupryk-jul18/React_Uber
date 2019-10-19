import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const RestaurantCard = props => {
  const { imageUrl, title, categories, etaRange, uuid } = props;

  return (
    <div className="restaurant-card">
      <img src={imageUrl} alt={title} className="restaurant-card__img" />
      <h2 className="restaurant-card__title">{title}</h2>
      <div className="restaurant-card__categories">
        {categories.join(" + ")}
      </div>
      <div className="restaurant-card__range">{etaRange}</div>
    </div>
  );
};

export default RestaurantCard;
// const mapState = state => {
//   return {
//     restaurantsList: selectRestaurntsList(state)
//   };
// };

// const mapDispatch = { loadRestaurants };

// export default connect(
//   mapState,
//   mapDispatch
// )(RestaurantCard);

RestaurantCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string
};

RestaurantCard.defaultProps = {
  categories: [],
  etaRange: ""
};
