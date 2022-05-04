import React from 'react';
import Styles from "./Timeline.module.css";
import Icon from "../Icon/Icon";

const TimelineItem = ({reversed, date, title, subtitle, text, icon}) => {
	const classes = [Styles.item];
	if (reversed) classes.push(Styles.reverse);
	
	return (
		<div className={classes.join(' ')}>
			<div className={Styles.dateBlock}>
				<Icon
					name={icon}
					size="xl"
				/>
				{date}
			</div>
			<div className={Styles.textBlock}>
				<h1 className={Styles.title}>{title}</h1>
				<h3 className={Styles.subtitle}>{subtitle}</h3>
				<p className={Styles.text}>{text}</p>
			</div>
		</div>
	);
};

export default TimelineItem;