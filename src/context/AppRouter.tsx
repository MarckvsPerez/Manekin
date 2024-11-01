import { Route, Routes } from 'react-router-dom';
import { LayoutProps } from '../interfaces';
import { MainLayout } from '../layout/MainLayout';
import { AboutUs } from '../pages/AboutUs';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';


const loadLayout = (Layout: React.ComponentType<LayoutProps>, Page: React.ComponentType): JSX.Element => {
	return (
		<Layout>
			<Page />
		</Layout>
	);
};

export default function AppRouter(): JSX.Element {
    return (
        <>
            <Routes>
                <Route path='/' element={loadLayout(MainLayout,Home)} />
                <Route path='/about' element={loadLayout(MainLayout,AboutUs)} />
                <Route path='/contact' element={loadLayout(MainLayout,Contact)} />
            </Routes>
        </>
    );
}