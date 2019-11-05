import React, {Component} from 'react';
import {Button} from 'components';

class App extends Component {
  render(){
    return (
      <div className="wrapper ">
        <h1>hello world</h1>
        <Button className="button__large" type="primary" size="large">This is button</Button>
      </div>
    );
  }
}

export default App;
