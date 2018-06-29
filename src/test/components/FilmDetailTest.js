import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount, render} from 'enzyme';
import FilmDetail from '../../components/FilmDetail';

describe('FilmDetail Component', () => {

    it('should render without throwing an error', () => {
        const movie = {
            title: 'title',
            poster_path: 'test',
            release_date: '2019',
            genres: ['1', '2']
        }
        expect(shallow(<FilmDetail movie={movie} />)).toMatchSnapshot();
    });
});
