import * as movieSvc from '../../servers/movieSvc';

global.fetch = require('jest-fetch-mock');

describe('movieSvc', async () => {
    it('should return guardians of the Galaxy.', (done) => {
        const expected = {
            "id": 447365,
            "title": "Guardians of the Galaxy Vol. 3",
            "tagline": "",
            "vote_average": 0,
            "vote_count": 9,
            "release_date": "2020-05-01",
            "poster_path": "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
            "overview": "The third film based on Marvel's Guardians of the Galaxy.",
            "budget": 0,
            "revenue": 0,
            "genres": [
                "Action",
                "Adventure",
                "Science Fiction"
            ],
            "runtime": null
        };
        fetch.mockResponseOnce(JSON.stringify(expected));
        
        movieSvc.fetchMovie(447365).then((data) => {
            expect(data).toEqual(expected);
            done();
        })
    });
});
