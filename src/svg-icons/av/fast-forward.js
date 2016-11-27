import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let AvFastForward = (props) => (
  <SvgIcon {...props}>
    <Path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>
  </SvgIcon>
);
AvFastForward = pure(AvFastForward);
AvFastForward.displayName = 'AvFastForward';
AvFastForward.muiName = 'SvgIcon';

export default AvFastForward;
