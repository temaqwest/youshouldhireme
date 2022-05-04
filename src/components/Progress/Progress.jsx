import React from 'react';
import Styles from './Progress.module.css';

const Progress = ({text, value, color}) => {
	const progress = (
		<div className={Styles.progress}>
			<div
				role="progressbar"
				className={Styles.progressBar}
				style={{width: value, backgroundColor: color}}
			/>
		</div>
	);
	
	const textContent = (
		<div className={Styles.wrapper}>
			<span className={Styles.text}>{text}</span>
			{progress}
		</div>
	);
	
	return text ? textContent : progress;
};

export default Progress;