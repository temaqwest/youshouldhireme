import React from 'react';
import Styles from './Timeline.module.css';
import TimelineItem from "./TimelineItem";

const Timeline = ({items}) => {
	
	return (
		<div className={Styles.timeline}>
			{
				items.map((item,idx) => (
					<TimelineItem
						key={item.id}
						title={item.title}
						subtitle={item.subtitle}
						date={item.date}
						text={item.text}
						icon={item.icon}
						reversed={idx % 2 !== 0}
					/>
				))
			}
		</div>
	);
};

export default Timeline;