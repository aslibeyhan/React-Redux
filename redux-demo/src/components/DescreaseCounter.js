import React, { Component } from 'react';
import { descreaseCounter } from '../redux/actions/counterActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 class DescreaseCounter extends Component {
  render() {
    return (
      <div> <button onClick={e=>{
        this.props.dispatch(descreaseCounter())
    }}>
        1 azalt
    </button></div>
    )
  }
}

function mapDispatchToProps(dispatch){
    return{actions:bindActionCreators(descreaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(DescreaseCounter);