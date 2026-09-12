import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three NotificationItem elements when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });

  it('first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const firstItem = wrapper.find(NotificationItem).first();
    expect(firstItem.html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it('displays the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('does not display div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('displays the menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('displays div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });
});
