import React, {Component, PropTypes} from 'react';

class TimeDisplay extends Component {
  static propTypes = {
    affix: PropTypes.oneOf(['', 'pm', 'am']),
    format: PropTypes.oneOf(['ampm', '24hr']),
    mode: PropTypes.oneOf(['hour', 'minute']),
    onSelectAffix: PropTypes.func,
    onSelectHour: PropTypes.func,
    onSelectMin: PropTypes.func,
    selectedTime: PropTypes.object.isRequired,
  };

  static defaultProps = {
    affix: '',
    mode: 'hour',
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    transitionDirection: 'up',
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTime !== this.props.selectedTime) {
      const direction = nextProps.selectedTime > this.props.selectedTime ? 'up' : 'down';

      this.setState({
        transitionDirection: direction,
      });
    }
  }

  sanitizeTime() {
    let hour = this.props.selectedTime.getHours();
    let min = this.props.selectedTime.getMinutes().toString();

    if (this.props.format === 'ampm') {
      hour %= 12;
      hour = hour || 12;
    }

    hour = hour.toString();
    if (hour.length < 2 ) hour = `0${hour}`;
    if (min.length < 2 ) min = `0${min}`;

    return [hour, min];
  }

  render() {
    const {
      affix,
      format,
      mode,
      onSelectAffix,
      onSelectHour,
      onSelectMin,
      selectedTime, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const {prepareStyles, timePicker} = this.context.muiTheme;

    const styles = {
      root: {
        padding: '14px 0',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        backgroundColor: timePicker.headerColor,
        color: 'white',
      },
      text: {
        margin: '6px 0',
        lineHeight: '58px',
        height: 58,
        fontSize: 58,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
      },
      time: {
        margin: '0 10px',
      },
      affix: {
        flex: 1,
        position: 'relative',
        lineHeight: '17px',
        height: 17,
        fontSize: 17,
      },
      affixTop: {
        position: 'absolute',
        top: -20,
        left: 0,
      },
      clickable: {
        cursor: 'pointer',
      },
      inactive: {
        opacity: 0.7,
      },
    };

    const [hour, min] = this.sanitizeTime();

    let buttons = [];
    if (format === 'ampm') {
      buttons = [
        <View
          key="pm"
          style={prepareStyles(Object.assign({}, styles.clickable, affix === 'pm' ? {} : styles.inactive))}
          onTouchTap={() => onSelectAffix('pm')}
        >
          {'PM'}
        </View>,
        <View
          key="am"
          style={prepareStyles(Object.assign({},
            styles.affixTop, styles.clickable, affix === 'am' ? {} : styles.inactive))}
          onTouchTap={() => onSelectAffix('am')}
        >
          {'AM'}
        </View>,
      ];
    }

    return (
      <View {...other} style={prepareStyles(styles.root)}>
        <View style={prepareStyles(styles.text)}>
          <View style={prepareStyles(Object.assign({}, styles.affix))} />
          <View style={prepareStyles(styles.time)}>
            <View
              style={prepareStyles(Object.assign({}, styles.clickable, mode === 'hour' ? {} : styles.inactive))}
              onTouchTap={onSelectHour}
            >
              {hour}
            </View>
            <View>:</View>
            <View
              style={prepareStyles(Object.assign({},
                styles.clickable, mode === 'minute' ? {} : styles.inactive))}
              onTouchTap={onSelectMin}
            >
              {min}
            </View>
          </View>
          <View style={prepareStyles(Object.assign({}, styles.affix))}>
            {buttons}
          </View>
        </View>
      </View>
    );
  }
}

export default TimeDisplay;
