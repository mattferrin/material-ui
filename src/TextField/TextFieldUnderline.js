import React, {PropTypes} from 'react';
import {
  View,
  Text,
} from 'react-native';
import transitions from '../styles/transitions';
import {
  IS_WEB,
  webOrNative,
} from '../utils/platform';

const propTypes = {
  /**
   * True if the parent `TextField` is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` is disabled.
   */
  disabledStyle: PropTypes.object,
  /**
   * True if the parent `TextField` has an error.
   */
  error: PropTypes.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` has an error.
   */
  errorStyle: PropTypes.object,
  /**
   * True if the parent `TextField` is focused.
   */
  focus: PropTypes.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` is focused.
   */
  focusStyle: PropTypes.object,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: PropTypes.object.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

const defaultProps = {
  disabled: false,
  disabledStyle: {},
  error: false,
  errorStyle: {},
  focus: false,
  focusStyle: {},
  style: {},
};

const TextFieldUnderline = (props) => {
  const {
    disabled,
    disabledStyle,
    error,
    errorStyle,
    focus,
    focusStyle,
    muiTheme,
    style,
  } = props;

  const {
    color: errorStyleColor,
  } = errorStyle;

  const {
    prepareStyles,
    textField: {
      borderColor,
      disabledTextColor,
      errorColor,
      focusColor,
    },
  } = muiTheme;

  const styles = {
    root: Object.assign({
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderBottom: 'solid 1px',
      borderColor: borderColor,
      bottom: 8,
      boxSizing: 'content-box',
      margin: 0,
      position: 'absolute',
    }, IS_WEB ? {
      width: '100%',
    } : {}),
    disabled: {
      borderBottom: 'dotted 2px',
      borderColor: disabledTextColor,
    },
    focus: Object.assign({
      borderBottom: 'solid 2px',
      borderColor: focusColor,
      transition: transitions.easeOut(),
    }, IS_WEB ? {
      transform: 'scaleX(0)',
    } : {}),
    error: Object.assign({
      borderColor: errorStyleColor ? errorStyleColor : errorColor,
    }, IS_WEB ? {
      transform: 'scaleX(1)',
    } : {}),
  };

  let underline = Object.assign({}, styles.root, style);
  let focusedUnderline = Object.assign({}, underline, styles.focus, focusStyle);

  if (disabled) underline = Object.assign({}, underline, styles.disabled, disabledStyle);
  if (focus) focusedUnderline = Object.assign({}, focusedUnderline, {transform: 'scaleX(1)'});
  if (error) focusedUnderline = Object.assign({}, focusedUnderline, styles.error);

  const Div = webOrNative('div', View);
  return (<Div>
    <Div style={prepareStyles(underline)} />
    <Div style={prepareStyles(focusedUnderline)} />
  </Div>)
};

TextFieldUnderline.propTypes = propTypes;
TextFieldUnderline.defaultProps = defaultProps;

export default TextFieldUnderline;
