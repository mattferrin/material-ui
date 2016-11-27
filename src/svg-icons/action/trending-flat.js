import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let ActionTrendingFlat = (props) => (
  <SvgIcon {...props}>
    <Path d="M22 12l-4-4v3H3v2h15v3z"/>
  </SvgIcon>
);
ActionTrendingFlat = pure(ActionTrendingFlat);
ActionTrendingFlat.displayName = 'ActionTrendingFlat';
ActionTrendingFlat.muiName = 'SvgIcon';

export default ActionTrendingFlat;
