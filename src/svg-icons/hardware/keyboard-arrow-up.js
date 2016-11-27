import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let HardwareKeyboardArrowUp = (props) => (
  <SvgIcon {...props}>
    <Path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
  </SvgIcon>
);
HardwareKeyboardArrowUp = pure(HardwareKeyboardArrowUp);
HardwareKeyboardArrowUp.displayName = 'HardwareKeyboardArrowUp';
HardwareKeyboardArrowUp.muiName = 'SvgIcon';

export default HardwareKeyboardArrowUp;
