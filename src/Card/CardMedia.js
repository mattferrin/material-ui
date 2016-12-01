import React, {Component, PropTypes} from 'react';
import {
  View,
} from 'react-native';
import {IS_WEB} from '../utils/platform';

function getStyles(props, context) {
  const {cardMedia} = context.muiTheme;

  return {
    root: {
      position: 'relative',
    },
    overlayContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    overlay: Object.assign({
      position: 'relative',
    }, IS_WEB ? {
      height: '100%',
    } : {
      flex: 1,
    }),
    overlayContent: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      paddingTop: 8,
      background: cardMedia.overlayContentBackground,
    },
    media: {},
    mediaChild: Object.assign({
      verticalAlign: 'top',
    }, IS_WEB ? {
      maxWidth: '100%',
      minWidth: '100%',
      width: '100%',
    } : {
      flex: 1,
    }),
  };
}

class CardMedia extends Component {
  static propTypes = {
    /**
     * If true, a click on this card component expands the card.
     */
    actAsExpander: PropTypes.bool,
    /**
     * Can be used to render elements inside the Card Media.
     */
    children: PropTypes.node,
    /**
     * If true, this card component is expandable.
     */
    expandable: PropTypes.bool,
    /**
     * Override the inline-styles of the Card Media.
     */
    mediaStyle: PropTypes.object,
    /**
     * Can be used to render overlay element in Card Media.
     */
    overlay: PropTypes.node,
    /**
     * Override the inline-styles of the overlay container.
     */
    overlayContainerStyle: PropTypes.object,
    /**
     * Override the inline-styles of the overlay content.
     */
    overlayContentStyle: PropTypes.object,
    /**
     * Override the inline-styles of the overlay element.
     */
    overlayStyle: PropTypes.object,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      actAsExpander, // eslint-disable-line no-unused-vars
      children,
      expandable, // eslint-disable-line no-unused-vars
      mediaStyle,
      overlay,
      overlayContainerStyle,
      overlayContentStyle,
      overlayStyle,
      style,
      ...other
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);
    const rootStyle = Object.assign(styles.root, style);
    const extendedMediaStyle = Object.assign(styles.media, mediaStyle);
    const extendedOverlayContainerStyle = Object.assign(styles.overlayContainer, overlayContainerStyle);
    const extendedOverlayContentStyle = Object.assign(styles.overlayContent, overlayContentStyle);
    const extendedOverlayStyle = Object.assign(styles.overlay, overlayStyle);
    const titleColor = this.context.muiTheme.cardMedia.titleColor;
    const subtitleColor = this.context.muiTheme.cardMedia.subtitleColor;
    const color = this.context.muiTheme.cardMedia.color;

    const styledChildren = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        style: prepareStyles(Object.assign({}, styles.mediaChild, child.props.style)),
      });
    });

    const overlayChildren = React.Children.map(overlay, (child) => {
      if (child.type.muiName === 'CardHeader' || child.type.muiName === 'CardTitle') {
        return React.cloneElement(child, {
          titleColor: titleColor,
          subtitleColor: subtitleColor,
        });
      } else if (child.type.muiName === 'CardText') {
        return React.cloneElement(child, {
          color: color,
        });
      } else {
        return child;
      }
    });

    let Div = IS_WEB ? 'div' : View;
    return React.createElement(
      Div,
      {
        ...other,
        style: prepareStyles(rootStyle),
      },
      [
        React.createElement(
          Div,
          {
            style: prepareStyles(extendedMediaStyle),
            styledChildren
          }
        ),
        overlay ? React.createElement(
          Div,
          {
            style: prepareStyles(extendedOverlayContainerStyle),
          },
          React.createElement(
            Div,
            {
              style: prepareStyles(extendedOverlayStyle),
            },
            React.createElement(
              Div,
              {
                style: prepareStyles(extendedOverlayContentStyle),
              },
              overlayChildren
            )
          )
        ): React.createElement(Div, null)
      ]
    );
  }
}

export default CardMedia;
