import React from 'react';
import Styles from "./ExperienceSection.module.css";
import Container from "../Container/Container";
import Timeline from "../UI/Timeline/Timeline";

const timeliness =  require("../../assets/data/timeLineItems.json");

const ExperienceSection = () => {
	
	return (
		<Container type="light">
			<div className={Styles.content}>
				<h1 className={Styles.title}>Опыт & Образование</h1>
				<Timeline
					items={timeliness}
				/>
			</div>
		</Container>
	);
};

export default ExperienceSection;