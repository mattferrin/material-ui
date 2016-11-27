import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let NavigationExpandMore = (props) => (
  <SvgIcon {...props}>
    <Path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
  </SvgIcon>
);
NavigationExpandMore = pure(NavigationExpandMore);
NavigationExpandMore.displayName = 'NavigationExpandMore';
NavigationExpandMore.muiName = 'SvgIcon';

export default NavigationExpandMore;
