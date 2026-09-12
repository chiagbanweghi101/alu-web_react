import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-notification-type="default">New course available</li>
        <li data-notification-type="urgent">New resume available</li>
        <li
          data-notification-type="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
