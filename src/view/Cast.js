import React, { Component } from "react";
import fetchMovies from "../services/moviesSearchApi";
import CastList from "../components/CastList/CastList";
import scroll from "../utils/scroll";

class Cast extends Component {
  state = {
    cast: null,
  };

  componentDidMount() {
    fetchMovies
      .fetchMovieCast(this.props.match.params.movieId)
      .then((cast) => this.setState({ cast }))
      .finally(() => scroll());
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { cast } = this.state;
    return <>{cast && <CastList cast={cast} />}</>;
  }
}

export default Cast;
