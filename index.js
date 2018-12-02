import React from 'react';
import ReactDOM from 'react-dom';

const appDiv = document.createElement('div');
appDiv.id = 'app';

document.body.appendChild(appDiv);

class App extends React.Component {
  render(){
    return(
      <div>
        Hello World
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
