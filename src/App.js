import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './Route';
import _ from 'lodash';

function App() {
	const token = localStorage.getItem('token');

	return (
		<div>
			<BrowserRouter>
				<Switch>
					{token !== null
						? privateRoutes.map((route, index) => <Route exact={route.exact} path={route.path} component={route.component} key={index} />)
						: publicRoutes.map((route, index) => <Route exact={route.exact} path={route.path} component={route.component} key={index} />)}
				</Switch>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
