import React from 'react';
import {
  Platform
} from 'react-native';

export const IS_WEB = Platform.OS === 'web';

export const webOrNative = function(web, native) {
  return React.createClass({
    render: function() {
      return React.createElement(
        IS_WEB ? web : native,
        this.props,
        this.props.children
      );
    }
  });
};
