import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let HardwareKeyboardCapslock = (props) => (
  <SvgIcon {...props}>
    <Path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z"/>
  </SvgIcon>
);
HardwareKeyboardCapslock = pure(HardwareKeyboardCapslock);
HardwareKeyboardCapslock.displayName = 'HardwareKeyboardCapslock';
HardwareKeyboardCapslock.muiName = 'SvgIcon';

export default HardwareKeyboardCapslock;
