const initialState = {
    loadingStatus: 'success',
    movies: [],
    searchFilterCriteria: { text: '', searchBy: 'SEARCH_BY_TITLE', sortBy: 'vote_average' },
    loadingErrorMessage: '',
};

export default initialState;
