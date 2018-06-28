import PropTypes from 'prop-types';

const initialState = {
    movies: new Array()
}

initialState.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
}

export default initialState;
