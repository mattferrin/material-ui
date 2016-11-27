import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let DeviceSignalCellularConnectedNoInternet1Bar = (props) => (
  <SvgIcon {...props}>
    <path fillOpacity=".3" d="M22 8V2L2 22h16V8z"/><Path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z"/>
  </SvgIcon>
);
DeviceSignalCellularConnectedNoInternet1Bar = pure(DeviceSignalCellularConnectedNoInternet1Bar);
DeviceSignalCellularConnectedNoInternet1Bar.displayName = 'DeviceSignalCellularConnectedNoInternet1Bar';
DeviceSignalCellularConnectedNoInternet1Bar.muiName = 'SvgIcon';

export default DeviceSignalCellularConnectedNoInternet1Bar;
