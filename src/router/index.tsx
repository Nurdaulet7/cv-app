import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import Home from '@/pages/Home/Home';
import NotFound from '@/pages/NotFound';
import Resume from '@/pages/Resume/Resume';

const AppRouter = () => (
	<BrowserRouter>
		<Routes>
			<Route path={ROUTES.HOME} element={<Home />} />
			<Route path={ROUTES.RESUME} element={<Resume />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);

export default AppRouter;
