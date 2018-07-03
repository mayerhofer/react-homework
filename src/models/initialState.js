const initialState = {
    loadingStatus: 'success',
    movies: [],
    searchFilterCriteria: { text: '', searchBy: 'SEARCH_BY_TITLE', sortBy: 'vote_average' },
    loadingErrorMessage: 'SEARCH_BY_TITLE',
};

export default initialState;
