import React from "react";
import PropTypes from "prop-types";
import styles from "./CastList.module.scss";

function CastList({ cast }) {
  return (
    <ul className={styles.castList}>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className={styles.castList_item}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"
            }
            alt="movie actor"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};

export default CastList;
