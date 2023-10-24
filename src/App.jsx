import Header from './sections/Header';
import Main from './sections/Main';
import Footer from './sections/Footer';

const App = () => (
	<div className='md:h-screen flex flex-col w-full bg-slate-700'>
		<Header />
		<Main />
		<Footer />
	</div>
);

export default App;
