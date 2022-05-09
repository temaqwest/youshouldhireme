import React, {useEffect, useState} from 'react';
import Styles from "./ProjectsSection.module.css";
import Container from "../Container/Container";
import ProjectItem from "../ProjectItem/ProjectItem";
const projectsJSON = require('../../assets/data/projectItems.json');

const ProjectsSection = () => {
	return (
		<Container type="dark">
			<div className={Styles.content}>
				<h1 className={Styles.title}>Некоторые проекты, в которых участвовал</h1>
				<div className={Styles.list}>
					{
						projectsJSON.map(item => (
							<ProjectItem
								key={item.id}
								item={item}
							/>
						))
					}
				</div>
			</div>
		</Container>
	);
};

export default ProjectsSection;