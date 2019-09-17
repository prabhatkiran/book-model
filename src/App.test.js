// import React, {Component} from 'react';
// import { shallow } from 'enzyme';
// import Books from './components/books';
// import axios from 'axios';
 
// jest.mock('axios');
 
// describe('Book component', () => {
//   describe('when rendered', () => {
//     it('should fetch a list of books', () => {
//       //Component.prototype.methodName = jest.fn();
//       //const getSpy = jest.spyOn(Component.prototype, 'axios.get');
//       const getSpy = jest.spyOn(axios, 'get');
//       const bookInstance = shallow(<Books />);

//       expect(getSpy).toBeCalled();
//     });
//   });
// });


import waitUntil from 'async-wait-until';
import { shallow } from 'enzyme';
import nock from 'nock';
import React from 'react';
import Books from './components/books';
describe('<Books />', () => {
  beforeAll(() => {

     

    nock('https://localhost:3000')
      .get('/books')
      .reply(200, 
          [
            {
              "bookId": 45,
              "isbn": "45",
              "name": "My best book 3"
            }
          ]
      )
  });
  it('Component fetching books from API', async (done) => {
    let state = {
        books: []
      }
      const root = shallow(<Books book={[
            {
              "bookId": 45,
              "isbn": "45",
              "name": "My best book 3"
            }
          ]}/>);
      state.books.push({
              "bookId": 45,
              "isbn": "45",
              "name": "My best book 3"
            });
      let componentsBook = {};
      // We wait until the state has a weather summary, but we
      // don't care yet about the content.
      await waitUntil(() => state !== null);
      // It is better to have the expectation here and not inside
      // the waitUntil condition.
     expect(componentsBook.books[0].name).toEqual('My best book 3');
     done();
  });
});