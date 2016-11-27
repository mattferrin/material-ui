import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let DeviceSignalCellular4Bar = (props) => (
  <SvgIcon {...props}>
    <Path d="M2 22h20V2z"/>
  </SvgIcon>
);
DeviceSignalCellular4Bar = pure(DeviceSignalCellular4Bar);
DeviceSignalCellular4Bar.displayName = 'DeviceSignalCellular4Bar';
DeviceSignalCellular4Bar.muiName = 'SvgIcon';

export default DeviceSignalCellular4Bar;
