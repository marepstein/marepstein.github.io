import React, { Component } from 'react'


class EmailButton extends Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    window.location.href = `mailto:${this.props.email}`;
  }
  render(){
    return <button onClick={this.onClick}>EmailButton</button>;
  }
}

export default EmailButton