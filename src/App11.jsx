import React from 'react';
import { connect } from 'react-redux';

function App11(props) {
  return (
    <div>
      <div>num的值是：{props.num}</div>
      <button onClick={props.increment}>点击加一</button>
    </div>
  );
}

const mapStateToProps = props => {
  return { num: props.num };
};
const mapDispatchToProps = dispatch => {
  return {
    increment() {
      const payload = { type: 'addNum', value: 2 };
      dispatch(payload);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App11);
