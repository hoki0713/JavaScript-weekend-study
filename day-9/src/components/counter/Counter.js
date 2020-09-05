import React, {Component, useState} from 'react';
import './Counter.css';

/*
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0,
    }
    this.minus = this.minus.bind(this)
    this.plus = this.plus.bind(this)
  }

  minus() {
    this.setState({
      count : this.state.count - 1
    })
  }

/!*  plus = () => {
    this.setState({
      count : this.state.count + 1
    })
  }*!/

  plus(){
    this.setState({
      count : this.state.count + 1
    })
  }



  render() {
    console.log("render!");
    const {count} = this.state;
    return (
      <>
        <button onClick={this.minus}>-</button>
        <span className={`count ${(count < 0) ? "negative" : (count > 0) ? "positive" : ""}`}>
          {count}
        </span>
        <button onClick={this.plus}>+</button>
      </>
    );
  }
}

*/


const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  }

  const minus = () => {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={minus}>-</button>
      <span className={`${count < 0 ? "negative" : count > 0 ? "positive" : ""}`}>
          {count}
        </span>
      <button onClick={plus}>+</button>
    </>
  )
}

export default Counter;