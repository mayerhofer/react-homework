const HOST = 'http://react-cdp-api.herokuapp.com';

function request(path, params = {}) {
    const address = [HOST, path].join('/');
    const GET = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');
    const url = [address, GET].join('?');

    const headers = {
        'Content-Type': 'application/json',
    };

    const options = {
        method: 'GET',
        headers,
    };

    return fetch(url, options)
        .then(response => response.json());
}

export { HOST, request };
