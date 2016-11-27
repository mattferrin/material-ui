import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let ActionChangeHistory = (props) => (
  <SvgIcon {...props}>
    <Path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"/>
  </SvgIcon>
);
ActionChangeHistory = pure(ActionChangeHistory);
ActionChangeHistory.displayName = 'ActionChangeHistory';
ActionChangeHistory.muiName = 'SvgIcon';

export default ActionChangeHistory;
