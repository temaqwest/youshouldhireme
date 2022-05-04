import React from 'react';
import Styles from "./SkillsSection.module.css";
import Container from "../Container/Container";
import Photo from "../../assets/images/actuallyme.png";
import Progress from "../Progress/Progress";

const SkillsSection = () => {
	const skills = [
		{id: 1, value: '90%', text: 'HTML', color: '#3C8AFF'},
		{id: 2, value: '92%', text: 'CSS/SCSS', color: '#3CFFAD'},
		{id: 3, value: '69%', text: 'JS', color: '#FFD43C'},
		{id: 4, value: '60%', text: 'VueJS', color: '#FF473C'},
		{id: 5, value: '40%', text: 'React', color: '#3CFF72'},
		{id: 6, value: '20%', text: 'TypeScript', color: '#923CFF'},
		{id: 7, value: '70%', text: 'Gulp', color: '#FB3CFF'},
		{id: 8, value: '60%', text: 'Webpack', color: '#FF823C'},
		{id: 9, value: '90%', text: 'Pug/Kit/JSX', color: '#E79BCA'},
	];
	
	
	return (
		<Container type="lightPink">
			<div className={Styles.content}>
				<div className={Styles.textBlock}>
					<h1 className={[Styles.title, Styles.special].join(' ')}>Обо мне</h1>
					<p className={Styles.text}>
						Начал заниматься программированием после своего первого Хакатона на 1 курсе в университете. На 2 курсе начал смотреть и пробовать себя в Веб-Разработке, выполнил несколько проектов на фрилансе, попробовал себя в качестве fullstack (писал простой бэк на python, с использованием Django, и на PHP, используя Symfony), а после устроился Web-разработчиком.
					</p>
				</div>
				<div className={Styles.skillsBlock}>
					<h1 className={Styles.title}>Скиллы</h1>
					<div className={Styles.skillsGrid}>
						{
							skills.map(skill => (
								<Progress
									key={skill.id}
									value={skill.value}
									text={skill.text}
									color={skill.color}
								/>
							))
						}
					</div>
				</div>
				<div className={Styles.avatar} style={{backgroundImage: `url(${Photo})`}}/>
			</div>
		</Container>
	);
};

export default SkillsSection;