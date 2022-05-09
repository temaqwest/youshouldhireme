import React from 'react';
import Styles from "./QualitiesSection.module.css";
import Container from "../Container/Container";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Pagination, Navigation, Scrollbar} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const QualitiesSection = () => {
	const slides = [
		{id: 1, title: 'Готов работать в команде', image: '/qualities/img1.png'},
		{id: 2, title: 'Вежливый', image: '/qualities/img4.png'},
		{id: 3, title: 'Терпеливый', image: '/qualities/img2.png'},
		{id: 4, title: 'Многозадачный', image: '/qualities/img3.png'},
		{id: 5, title: 'Увлечён своим делом', image: '/qualities/img.png'},
	];
	
	const swiperConfig = {
		loop: true,
		grabCursor: true,
		className: Styles.sliderSwiper,
		modules: [Navigation, Scrollbar, Pagination, A11y],
		centeredSlides: false,
		spaceBetween: -50,
		slidesPerView: 2,
		navigation: true,
		pagination: {
			clickable: true,
			bulletClass: `swiper-pagination-bullet ` + Styles.sliderPaginationBullet
		},
		style: {
			"--swiper-navigation-color": "var(--dark)",
		}
	}
	
	return (
		<Container type="pink" modifier={Styles.containerQualities} autoHeight>
			<h1 className={Styles.title}>Мои личностные качества</h1>
			<Swiper {...swiperConfig}>
				{
					slides.map((slide) => (
						<SwiperSlide key={slide.id}>
							{({isNext}) => (
								<div className={Styles.slideItem}>
									<div className={Styles.slideImage} style={{backgroundImage: `url('${slide.image}')`}}>
										<div className={Styles.slideText}>
											<span className={Styles.slideTitle}>{slide.title}</span>
										</div>
									</div>
								</div>
							)}
						</SwiperSlide>
					))
				}
			</Swiper>
		</Container>
	);
};

export default QualitiesSection;