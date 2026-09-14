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
            <p className={css(styles.text)}>Here is the list of notifications</p>
          ) : (
            <p className={css(styles.text)}>No new notification for now</p>
          )}
          <ul className={css(styles.list)}>
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
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      padding: 0,
      fontSize: '20px',
      border: 'none',
      zIndex: 10,
    },
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  text: {
    '@media (max-width: 900px)': {
      fontSize: '20px',
      padding: '10px',
      margin: 0,
    },
  },
});

export default Notifications;
