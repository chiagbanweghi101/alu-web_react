import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className={`menuItem ${css(styles.menuItem)}`}>Your notifications</div>
      {displayDrawer ? (
        <div className={`Notifications ${css(styles.notifications)}`}>
          {listNotifications.length > 0 ? (
            <p>Here is the list of notifications</p>
          ) : (
            <p>No new notification for now</p>
          )}
          <ul>
            {listNotifications.length === 0
              ? null
              : listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                  />
                ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    marginRight: '1rem',
    cursor: 'pointer',
  },
  notifications: {
    border: '2px dashed #e11d3f',
    padding: '1rem',
    position: 'absolute',
    right: '1rem',
    top: '2.5rem',
    width: '30%',
    background: 'white',
    zIndex: 1,
  },
});

export default Notifications;
