//Layouts
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './layouts/Main';

//Assets
import './assets/styles/app.scss';

//BL
import {
	headerNavbarItems,
	footerNavbarColumnItems,
	ImagesAndTextCarousel,
	productDetailsWithImage,
} from './data/pufiData';

function App() {
	return (
		<div className='App'>
			<Header headerData={headerNavbarItems} />
			<Main
				carouselData={ImagesAndTextCarousel}
				productDetailsWithImage={productDetailsWithImage}
			/>
			<Footer footerData={footerNavbarColumnItems} />
		</div>
	);
}

export default App;
