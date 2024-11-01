import { type ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import { FullWidthDiv } from './FullWidth.styled';


export const MainLayout = ({ children }: { children: ReactNode }): JSX.Element => {

    return (
        <FullWidthDiv>
            <Navbar/>
            {children}
        </FullWidthDiv>
    );
};




