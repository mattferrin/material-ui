import React from 'react';
class Path extends React.Component {
  render() {
    return <path {...this.props}>{this.props.children}</path>;
  }
}
export {Path};

export default class Svg extends React.Component {
  render() {
    return <svg {...this.props}>{this.props.children}</svg>;
  }
}
