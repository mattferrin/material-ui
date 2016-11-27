import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let ActionTrendingDown = (props) => (
  <SvgIcon {...props}>
    <Path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/>
  </SvgIcon>
);
ActionTrendingDown = pure(ActionTrendingDown);
ActionTrendingDown.displayName = 'ActionTrendingDown';
ActionTrendingDown.muiName = 'SvgIcon';

export default ActionTrendingDown;
