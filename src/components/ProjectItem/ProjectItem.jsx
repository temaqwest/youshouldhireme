import React from 'react';
import Styles from "./ProjectItem.module.css";

const ProjectItem = ({item}) => {
	return (
		<div className={Styles.item}>
			<div className={Styles.image} style={{backgroundImage: `url('${item.image}')`}}/>
			<div className={Styles.textContent}>
				<h2 className={Styles.title}>{item.title}</h2>
				<p className={Styles.text}>{item.text}</p>
				{ item.link ? <a href={item.link} className={Styles.link} target="_blank" title={item.link} rel="noreferrer noopener">Посетить &#128064;</a> : "" }
			</div>
		</div>
	);
};

export default ProjectItem;