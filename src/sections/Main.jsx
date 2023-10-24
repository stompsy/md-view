import Editor from '../components/Editor';

const Main = () => {
	return (
		<main className='bg-slate-900 overflow-hidden'>
			<section className='flex justify-between gap-4 px-4 w-full h-full bg-slate-700'>
				<Editor />
			</section>
		</main>
	);
};

export default Main;
