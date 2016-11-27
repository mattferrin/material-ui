import React, {Component, PropTypes} from 'react';
import {
  Text
} from 'react-native'
import {IS_WEB} from '../utils/platform'

function getStyles(props, context) {
  const {baseTheme} = context.muiTheme;

  return {
    root: Object.assign({
      position: 'relative',
      paddingLeft: baseTheme.spacing.desktopGutterLess,
      paddingRight: baseTheme.spacing.desktopGutterLess,
    }, IS_WEB ? {
      verticalAlign: 'middle',
    } : {}),
  };
}

class FlatButtonLabel extends Component {
  static propTypes = {
    label: PropTypes.node,
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      label,
      style,
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    return React.createElement(
      IS_WEB ? 'span' : Text,
        {style:prepareStyles(Object.assign(styles.root, style))},
        label
    );
  }
}

export default FlatButtonLabel;
