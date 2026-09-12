import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct html when passing type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
    expect(wrapper.text()).toBe('test');
  });

  it('renders the correct html when passing a html prop', () => {
    const wrapper = shallow(
      <NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual({
      __html: '<u>test</u>',
    });
  });
});
