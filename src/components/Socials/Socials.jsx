import React from 'react';
import Styles from './Socials.module.css';
import Button from "../UI/Button/Button";

const Socials = () => {
	const socials = [
		{id: 1, name: 'instagram'},
		{id: 2, name: 'mail'},
		{id: 3, name: 'telegram'},
		{id: 4, name: 'vkontakte'},
		{id: 5, name: 'phone'},
	];
	
	return (
		<div className={Styles.socialsWrapper}>
			<div className={Styles.socials}>
				{
					socials.map(social => (
						<Button
							size="xl"
							key={social.id}
							icon={social.name}
							title={social.name}
							modifier={Styles.socialButton}
						/>
					))
				}
			</div>
		</div>
	);
};

export default Socials;