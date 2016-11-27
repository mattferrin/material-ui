import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let NavigationArrowDropUp = (props) => (
  <SvgIcon {...props}>
    <Path d="M7 14l5-5 5 5z"/>
  </SvgIcon>
);
NavigationArrowDropUp = pure(NavigationArrowDropUp);
NavigationArrowDropUp.displayName = 'NavigationArrowDropUp';
NavigationArrowDropUp.muiName = 'SvgIcon';

export default NavigationArrowDropUp;
