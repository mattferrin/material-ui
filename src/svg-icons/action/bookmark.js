import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let ActionBookmark = (props) => (
  <SvgIcon {...props}>
    <Path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
  </SvgIcon>
);
ActionBookmark = pure(ActionBookmark);
ActionBookmark.displayName = 'ActionBookmark';
ActionBookmark.muiName = 'SvgIcon';

export default ActionBookmark;
