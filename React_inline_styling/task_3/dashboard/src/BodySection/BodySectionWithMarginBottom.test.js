import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders a BodySection component and passes props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).props().title).toBe('test title');
  });
});
