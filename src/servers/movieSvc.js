const endpoint = 'http://react-cdp-api.herokuapp.com/';

const glue = (strings, ...values) => values[2] ? `${values[0]}${values[1]}?${values[2]}` : `${values[0]}${values[1]}`;

const generateQueryString = params => (
    params ? Object.keys(params)
    .filter(key => params[key])
    .map(key => [key, params[key].toString().trim()].join('='))
    .join('&') : ''
);

export const fetchData = async ({path, params}) => {
    const data = await fetch (
        glue`${endpoint}${path}${generateQueryString(params)}`, {
            method: 'GET',
            mode: 'cors'
        }
    );
    return await data.json();
};

export const fetchMovies = async (params = {offset: 0, limit: 10000}) => await fetchData({path: 'movies', params});

export const fetchMovie = async (id) => await fetchData ( {path: `movies/${id}` } );
