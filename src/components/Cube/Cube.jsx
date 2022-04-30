import React from 'react';
import Styles from './Cube.module.css';

const Cube = ({perspective, cubeBackgroundRGB, width, height, size, modifier}) => {
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