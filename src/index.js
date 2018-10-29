import React from 'react';
import ReactDOM from 'react-dom';
//create new component which creates some HTML

const App = function() => {
	return <div>Hello There!</div>;
}

//Take whats generated and put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));