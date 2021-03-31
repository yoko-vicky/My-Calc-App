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
      operation: null,
    };
  }

  handleClick(btnName) {
    const newState = calculate(this.state, btnName);
    this.setState(() => ({ ...newState }));
  }

  render() {
    const { total, next } = this.state;

    return (
      <div className="calculator">
        <Display total={total} next={next} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}
export default App;
