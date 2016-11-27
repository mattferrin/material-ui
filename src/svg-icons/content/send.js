import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let ContentSend = (props) => (
  <SvgIcon {...props}>
    <Path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </SvgIcon>
);
ContentSend = pure(ContentSend);
ContentSend.displayName = 'ContentSend';
ContentSend.muiName = 'SvgIcon';

export default ContentSend;
