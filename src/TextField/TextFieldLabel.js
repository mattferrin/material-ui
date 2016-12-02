import React, {PropTypes} from 'react';
import {
  Text,
} from 'react-native';
import transitions from '../styles/transitions';
import {
  IS_WEB,
  webOrNative,
} from '../utils/platform';

function getStyles(props) {
  const defaultStyles = Object.assign({
    position: 'absolute',
    top: 38,
    transition: transitions.easeOut(),
    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
    transformOrigin: 'left top',
    pointerEvents: 'auto',
    userSelect: 'none',
  }, IS_WEB ? {
    lineHeight: '22px',
    transform: 'scale(1) translate(0, 0)',
  } : {
    lineHeight: 22,
  });

  const preShrinkStyles = Object.assign({
    pointerEvents: 'none',
  }. IS_WEB ? {
    transform: 'scale(0.75) translate(0, -28px)',
  } : {});
  const shrinkStyles = props.shrink ? Object.assign(preShrinkStyles, props.shrinkStyle) : null;

  return {
    root: Object.assign(defaultStyles, props.style, shrinkStyles),
  };
}

const TextFieldLabel = (props) => {
  const {
    muiTheme,
    className,
    children,
    htmlFor,
    onTouchTap,
  } = props;

  const {prepareStyles} = muiTheme;
  const styles = getStyles(props);

  let Label = webOrNative('label', Text);
  return (
    <Label
      className={className}
      style={prepareStyles(styles.root)}
      htmlFor={htmlFor}
      onTouchTap={onTouchTap}
    >
      {children}
    </Label>
  );
};

TextFieldLabel.propTypes = {
  /**
   * The label contents.
   */
  children: PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Disables the label if set to true.
   */
  disabled: PropTypes.bool,
  /**
   * The id of the target element that this label should refer to.
   */
  htmlFor: PropTypes.string,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: PropTypes.object.isRequired,
  /**
   * Callback function for when the label is selected via a touch tap.
   */
  onTouchTap: PropTypes.func,
  /**
   * True if the floating label should shrink.
   */
  shrink: PropTypes.bool,
  /**
   * Override the inline-styles of the root element when focused.
   */
  shrinkStyle: PropTypes.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: PropTypes.object,
};

TextFieldLabel.defaultProps = {
  disabled: false,
  shrink: false,
};

export default TextFieldLabel;
