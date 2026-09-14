import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = isHeader ? css(styles.headerRow) : css(styles.defaultRow);

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={rowStyle}>
          <th colSpan="2" className={css(styles.th)}>
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr className={rowStyle}>
        <th className={css(styles.th)}>{textFirstCell}</th>
        <th className={css(styles.th)}>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr className={rowStyle}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  th: {
    borderBottom: '2px solid #ddd',
    textAlign: 'left',
    padding: '0.5rem',
  },
});

export default CourseListRow;
