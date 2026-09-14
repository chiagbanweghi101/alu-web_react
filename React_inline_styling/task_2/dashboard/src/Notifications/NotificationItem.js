import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem({ type, html, value }) {
  const styleClass =
    type === 'urgent' ? css(styles.urgent) : css(styles.default);

  if (html) {
    return (
      <li
        data-notification-type={type}
        className={styleClass}
        dangerouslySetInnerHTML={html}
      ></li>
    );
  }
  return (
    <li data-notification-type={type} className={styleClass}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: undefined,
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

export default NotificationItem;
