import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import Main from './Main';

test('renders Main', () => {
  const mainSubject = mount(<Main />);
  mainSubject.find('input#loan').simulate('change', {target: {value: '100'}});
  mainSubject.find('input#interest').simulate('change', {target: {value: '0.05'}});
  mainSubject.find('button#result-button').simulate('click');
  expect(mainSubject.find('p').text()).toBe('105');
});
