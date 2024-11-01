import { Route, Routes, useLocation } from 'react-router-dom';
import { LayoutProps } from '../interfaces';
import { MainLayout } from '../layout/MainLayout';
import { AboutUs } from '../pages/AboutUs';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import AnimatedSquare from '../components/AnimatedTransition';


const loadLayout = (Layout: React.ComponentType<LayoutProps>, Page: React.ComponentType): JSX.Element => {
	return (
		<Layout>
			<Page />
		</Layout>
	);
};

export default function AppRouter(): JSX.Element {
    const location = useLocation();
    return (
        <>
        <AnimatedSquare key={location.key} />
            <Routes>
                <Route path='/' element={loadLayout(MainLayout,Home)} />
                <Route path='/about' element={loadLayout(MainLayout,AboutUs)} />
                <Route path='/contact' element={loadLayout(MainLayout,Contact)} />
            </Routes>
        </>
    );
}