import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let ContentFlag = (props) => (
  <SvgIcon {...props}>
    <Path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
  </SvgIcon>
);
ContentFlag = pure(ContentFlag);
ContentFlag.displayName = 'ContentFlag';
ContentFlag.muiName = 'SvgIcon';

export default ContentFlag;
