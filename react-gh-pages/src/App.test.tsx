import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it.only('should render the page', () => {
  const shallowApp = shallow(<App/>);
  expect(shallowApp.exists);

});
