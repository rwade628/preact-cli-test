import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import Todo from '../routes/todo';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

import store from '../redux/store'

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
						<Todo path="/todo" />
					</Router>
				</div>
			</Provider>
		);
	}
}
