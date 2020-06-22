import React, { Component } from "react";
import fetchMovies from "../services/moviesSearchApi";
import scroll from "../utils/scroll";
import Reviews from "../components/Reviews/Reviews";

class Review extends Component {
  state = {
    reviews: null,
  };

  componentDidMount() {
    fetchMovies
      .fetchMovieReviews(this.props.match.params.movieId)
      .then((reviews) => this.setState({ reviews }))
      .finally(() => scroll());
  }

  render() {
    const { reviews } = this.state;
    return <>{reviews && <Reviews reviews={reviews} />}</>;
  }
}

export default Review;
