import React from 'react';
import "./CertificatesSection.css";
import Container from "../Container/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CertificatesSection = () => {
	const slides = [
		{id: 1, title: 'Сертификат участника', text: '«Hackathon AUTUMN DSTU 2019»', image: '/certificates/certificate08.png'},
		{id: 2, title: 'Диплом победителя', text: '«Hackathon EdTech»', image: '/certificates/certificate05.png'},
		{id: 3, title: 'Диплом победителя', text: '«Цифровой прорыв 2020»', image: '/certificates/certificate07.png'},
		{id: 4, title: 'Диплом за лучший доклад', text: '«Компьютерное моделирование градиентного световода»', image: '/certificates/certificate06.png'},
		{id: 5, title: 'Диплом победителя', text: '«Hackathon CyberGarden»', image: '/certificates/certificate03.png'},
		{id: 6, title: 'Сертификат участника', text: '«Всероссийская Научно-Техническая Конференция»', image: '/certificates/certificate01.png'},
		{id: 7, title: 'Публикация в международном журнале', text: '«Компьютерное моделирование градиентного световода»', image: '/certificates/certificate02.png'},
		{id: 8, title: 'Научная статья', text: '«Заимствования в современном Русском языке»', image: '/certificates/certificate04.png'},
	];
	
	const swiperConfig = {
		loop: true,
		effect: "coverflow",
		grabCursor: true,
		className: "sliderSwiper",
		modules: [Navigation, Scrollbar, A11y, EffectCoverflow],
		centeredSlides: false,
		coverflowEffect:{
			rotate: 45,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: false,
		},
		slidesPerView: 3,
		navigation: true,
		style: {
			"--swiper-navigation-color": "var(--dark)",
		}
	}
	
	return (
		<Container type="lightGrey" modifier="containerCertificates" autoHeight>
			<h1 className="title">Сертификаты</h1>
			<Swiper {...swiperConfig}>
				{
					slides.map((slide) => (
						<SwiperSlide key={slide.id}>
							{({isNext}) => (
								<div className="slideItem">
									<div
										className="slideImage"
										style={{
											backgroundImage: `url('${slide.image}')`,
											transform: isNext ? 'scale(1.1)' : 'scale(1)'
										}}
									>
										<div className="slideText">
											<div className="slideTitle">{slide.title}</div>
											<div className="slideDescription">{slide.text}</div>
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

export default CertificatesSection;