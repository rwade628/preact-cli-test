import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux';

// Material Components
import Formfield from "preact-material-components/Formfield";
import LayoutGrid from "preact-material-components/LayoutGrid";
import Switch from "preact-material-components/Switch";
import Toolbar from "preact-material-components/Toolbar";

import Home from '../../routes/home';
import Profile from '../../routes/profile';
import Todo from '../../routes/todo';
import List from '../../routes/list'
// import Home from 'async!./home';
// import Profile from 'async!./profile';

// Components
import Menu from "../menu";

// Styles
import "preact-material-components/style.css";
import "./style";

import store from '../../redux/store'

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

	closeDrawer() {
		this.menu.close();
	}

	toggleDarkMode() {
		this.setState({
		  darkMode: !this.state.darkMode
		});
		if (this.state.darkMode) {
		  document.body.classList.add("mdc-theme--dark");
		} else {
		  document.body.classList.remove("mdc-theme--dark");
		}
	}

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Provider store={store}>
				<div className="home mdc-typography">
					<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					/>
					<div className={this.state.toolbarTitle ? "hero collapsed" : "hero"}>
					<Toolbar className="mdc-theme--dark">
						<Toolbar.Row>
							<Toolbar.Section align-start={true}>
								<Toolbar.Icon
									menu={true}
									href="#"
									onClick={e => {
									e.preventDefault();
									this.menu.open();
									}}
									>
									menu
								</Toolbar.Icon>
								<Toolbar.Title>Preact Material</Toolbar.Title>
							</Toolbar.Section>
							<Toolbar.Section align-end={true}>
								<Formfield className="field-darkmode">
									Dark Mode
									<Switch
										className="switch-darkmode"
										onChange={() => {
										this.toggleDarkMode();
										}}
									/>
								</Formfield>
							</Toolbar.Section>
						</Toolbar.Row>
					</Toolbar>
					</div>
					<Menu items={this.menuItems} ref={menu => (this.menu = menu)} />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
						<Todo path="/todo" />
						<List path="/list/:folder" />
					</Router>
				</div>
			</Provider>
		);
	}
}

