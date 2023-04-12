import { MovieLink } from './MovieItem.styled';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const MovieItem = ({ id, title }) => {
  const location = useLocation()
  return (
    <>
      <li>
        <MovieLink to={`/movies/${id}`} state={{ from:location}}>
          <h3>{title}</h3>
        </MovieLink>
      </li>
    </>
  );
};
export default MovieItem;
MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
