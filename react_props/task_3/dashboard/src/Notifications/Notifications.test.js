import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });

  it('first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications />);
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.html()).toEqual(
      '<li data-notification-type="urgent">New course available</li>'
    );
  });
});
