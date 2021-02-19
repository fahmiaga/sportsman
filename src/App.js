import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Feature from './pages/Features';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import About from './pages/About';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ContactPage from './pages/ContactPage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route path='/feature' component={Feature} />
					<Route path='/dashboard' component={Dashboard} />
					<Route path='/login' component={LoginPage} />
					<Route path='/register' component={RegisterPage} />
					<Route path='/profile' component={Profile} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={ContactPage} />
				</Switch>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
