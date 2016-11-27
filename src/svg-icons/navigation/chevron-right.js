import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let NavigationChevronRight = (props) => (
  <SvgIcon {...props}>
    <Path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
  </SvgIcon>
);
NavigationChevronRight = pure(NavigationChevronRight);
NavigationChevronRight.displayName = 'NavigationChevronRight';
NavigationChevronRight.muiName = 'SvgIcon';

export default NavigationChevronRight;
