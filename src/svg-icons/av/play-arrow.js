import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let AvPlayArrow = (props) => (
  <SvgIcon {...props}>
    <Path d="M8 5v14l11-7z"/>
  </SvgIcon>
);
AvPlayArrow = pure(AvPlayArrow);
AvPlayArrow.displayName = 'AvPlayArrow';
AvPlayArrow.muiName = 'SvgIcon';

export default AvPlayArrow;
