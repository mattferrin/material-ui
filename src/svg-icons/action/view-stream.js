import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let ActionViewStream = (props) => (
  <SvgIcon {...props}>
    <Path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"/>
  </SvgIcon>
);
ActionViewStream = pure(ActionViewStream);
ActionViewStream.displayName = 'ActionViewStream';
ActionViewStream.muiName = 'SvgIcon';

export default ActionViewStream;
