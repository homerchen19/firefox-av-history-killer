import React from 'react';
import ReactDOM from 'react-dom';

class Popup extends React.Component {
	render() {
		return <h1>This is an extension123</h1>
	}
}

ReactDOM.render(<Popup/>, document.getElementById('app'));
