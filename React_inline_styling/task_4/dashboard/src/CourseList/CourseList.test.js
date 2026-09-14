import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  describe('With CourseList Empty', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]} />);
    });

    it('renders CourseList component without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders correctly when listCourses is empty', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(3);
      const bodyRows = wrapper.find('tbody').find(CourseListRow);
      expect(bodyRows).toHaveLength(1);
      expect(bodyRows.at(0).prop('textFirstCell')).toBe(
        'No course available yet'
      );
    });

    it('renders correctly when listCourses is not passed', () => {
      const wrapperNoProp = shallow(<CourseList />);
      expect(
        wrapperNoProp.find('tbody').find(CourseListRow).at(0).prop('textFirstCell')
      ).toBe('No course available yet');
    });
  });

  describe('With CourseList containing elements', () => {
    let wrapper;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders the correct number of rows', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });

    it('renders a row for each course', () => {
      const bodyRows = wrapper.find('tbody').find(CourseListRow);
      expect(bodyRows).toHaveLength(3);
      expect(bodyRows.at(0).prop('textFirstCell')).toBe('ES6');
      expect(bodyRows.at(0).prop('textSecondCell')).toBe(60);
    });
  });
});
