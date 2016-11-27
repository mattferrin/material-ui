import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let ActionDone = (props) => (
  <SvgIcon {...props}>
    <Path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
  </SvgIcon>
);
ActionDone = pure(ActionDone);
ActionDone.displayName = 'ActionDone';
ActionDone.muiName = 'SvgIcon';

export default ActionDone;
