//Layouts
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './layouts/Main';

//Assets
import './assets/styles/app.scss';

//BL
import { headerNavbarItems } from './data/pufiData';

function App() {
	return (
		<div className='App'>
			<Header headerData={headerNavbarItems} />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
