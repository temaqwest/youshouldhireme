import React, {useRef} from 'react';
import Styles from './Cube.module.css';

const Cube = ({perspective, cubeBackgroundRGB, width, height, size, modifier}) => {
	
	const cubeRef = useRef();
	
	function rotateCube(e) {
		if (e.type === 'mouseout') {
			cubeRef.current.style.cursor = 'initial';
			return cubeRef.current.style.animation = `${Styles.rotateCube} infinite 20s linear`;
		}
		
		cubeRef.current.style.transform = `rotateY(${e.clientX / .6}deg) rotateX(${e.clientY / 1.4}deg)`;
		cubeRef.current.style.animation = 'none';
		cubeRef.current.style.cursor = 'move';
	}
	
	const sides = [
		{id: 1, text: '', styleClass: Styles.front},
		{id: 2, text: '', styleClass: Styles.back},
		{id: 3, text: '', styleClass: Styles.right},
		{id: 4, text: '', styleClass: Styles.left},
		{id: 5, text: '', styleClass: Styles.top},
		{id: 6, text: '', styleClass: Styles.bottom}
	];
	
	const cubeStyle = {
		perspective: perspective,
		width: size,
		height: size
	};
	
	const sideStyle = (idx) => ({
		background: `rgba(${cubeBackgroundRGB}, .${idx})`,
		width: width,
		height: height
	});
	
	return (
		<div
			onMouseMove={rotateCube}
			onMouseOut={rotateCube}
			ref={cubeRef}
			className={[Styles.cube, modifier].join(' ')}
			style={cubeStyle}
		>
			{
				sides.map(side => (
					<div
						key={side.id}
						className={[Styles.side, side.styleClass].join(' ')}
						style={sideStyle(side.id)}
					/>
				))
			}
		</div>
	);
};

export default Cube;