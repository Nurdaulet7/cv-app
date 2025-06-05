import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home/Home';
import NotFound from '@/pages/NotFound';
import Resume from '@/pages/Resume/Resume';

const AppRouter = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/resume' element={<Resume />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);

export default AppRouter;
