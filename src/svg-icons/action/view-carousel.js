import React from 'react';
import pure from 'recompose/pure';
import {Path} from '../../react-native-svg';
import SvgIcon from '../../SvgIcon';

let ActionViewCarousel = (props) => (
  <SvgIcon {...props}>
    <Path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/>
  </SvgIcon>
);
ActionViewCarousel = pure(ActionViewCarousel);
ActionViewCarousel.displayName = 'ActionViewCarousel';
ActionViewCarousel.muiName = 'SvgIcon';

export default ActionViewCarousel;
