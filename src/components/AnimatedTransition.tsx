import { StyledMotionDiv } from './styles/AnimatedSquare';



const AnimatedSquare = () => {
    return (
        <StyledMotionDiv
            initial={{ y: "100vh", opacity: 1 }} 
            animate={{ y: "-100vh", opacity: 1 }} 
            transition={{ duration: 1, ease: [1, 0.5, 0.2, 1] }}     
        />
    );
};

export default AnimatedSquare;