import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: '',
      next: '',
      // eslint-disable-next-line react/no-unused-state
      operation: null,
    };
  }

  handleClick(btnName) {
    console.log(btnName);
    const newState = calculate(this.state, btnName);
    console.log(newState);
    this.setState(() => ({ ...newState }));
  }

  render() {
    const { total, next } = this.state;

    return (
      <>
        <Display total={total} next={next} />
        <ButtonPanel handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;
