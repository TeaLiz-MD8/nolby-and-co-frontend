import {OrbitControls, ScrollControls} from '@react-three/drei';
import { Japanese_house } from './Japanese_house';
import { Overlay } from './Overlay';

export const Experience = () => {
    return (
        <>
        <ambientLight intensity={1} />
            <OrbitControls enableZoom={false}/>
                <Japanese_house/>
        </>
    );
};

