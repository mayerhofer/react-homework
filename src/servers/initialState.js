import PropTypes from 'prop-types';

const initialState = {
    movies: [],
};

initialState.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
};

export default initialState;
