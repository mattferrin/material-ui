import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let ContentForward = (props) => (
  <SvgIcon {...props}>
    <Path d="M12 8V4l8 8-8 8v-4H4V8z"/>
  </SvgIcon>
);
ContentForward = pure(ContentForward);
ContentForward.displayName = 'ContentForward';
ContentForward.muiName = 'SvgIcon';

export default ContentForward;
