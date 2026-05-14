import {Canvas} from "@react-three/fiber";
import {OrbitControls, useGLTF} from "@react-three/drei";

const DogModel = () => {
    const model = useGLTF("/Models/dog.glb");
    return (
        <>
            <primitive object={model.scene} position={[0, 0, 0]} scale={[1, 1, 1]} />
            <directionalLight position={[0, 10, 10]} color={0xffffff} intensity={10} />
            <OrbitControls />
        </>
    );
}

const Dog = () => {
    return (
        <Canvas>
            <DogModel />
        </Canvas>
    )
}
export default Dog;