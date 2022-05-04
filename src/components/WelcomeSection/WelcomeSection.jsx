import React from 'react';
import Header from "../Header/Header";
import Styles from "./WelcomeSection.module.css";
import Cube from "../Cube/Cube";
import Container from "../Container/Container";

const WelcomeSection = () => {
	return (
		<Container type="gradient">
			<Header/>
			<div className={Styles.content}>
				<div className={Styles.textBlock}>
					<h1 className={Styles.title}>
						Привет, Я - <span className={Styles.special}>Артём Татевосян</span>.
						<br/>
						Я люблю писать код и создавать новое.
					</h1>
					<h2 className={Styles.subtitle}>
						И вот несколько причин, почему вы должны нанять меня:
					</h2>
				</div>
				<Cube
					perspective="initial"
					cubeBackgroundRGB="21, 35, 49"
					width="270px"
					height="270px"
					size="200px"
					modifier="appCube"
				/>
			</div>
		</Container>
	);
};

export default WelcomeSection;