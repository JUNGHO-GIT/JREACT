import React, {useEffect} from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import Swiper from "swiper";
import "../app/App.css";

const Portfolio = () => {
	const portfolioItems = [
		{
			id: 1,
			filter: "filter-app",
			imgSrc: "/images/portfolio/portfolio-1.jpg",
			title: "App 1",
		},
		{
			id: 2,
			filter: "filter-card",
			imgSrc: "/images/portfolio/portfolio-2.jpg",
			title: "App 2",
		},
		{
			id: 3,
			filter: "filter-web",
			imgSrc: "/images/portfolio/portfolio-3.jpg",
			title: "App 3",
		},
	];

	useEffect(() => {

		let portfolioContainer = document.querySelector(".portfolio-container");

		if (portfolioContainer) {

			let portfolioIsotope = new Isotope(portfolioContainer, {
				itemSelector: ".portfolio-item",
			});
			let portfolioFilters = document.querySelectorAll("#portfolio-filters li");
			let allFilter = document.querySelector('#portfolio-filters li[data-filter="*"]');


			portfolioFilters.forEach(function (el, index) {
				el.addEventListener("click", function (e) {
					e.preventDefault();
					portfolioFilters.forEach(function (el) {
						el.classList.remove("filter-active");
					});
					this.classList.add("filter-active");

					portfolioIsotope.arrange({
						filter: this.getAttribute("data-filter"),
					});
				});
				if (index === 0) {
					el.classList.add("filter-active");
					portfolioIsotope.arrange({
						filter: el.getAttribute("data-filter"),
					});
				}
        if (allFilter) {
          allFilter.classList.add("filter-active");
          portfolioIsotope.arrange({
            filter: allFilter.getAttribute("data-filter"),
          });
        }
			});
		}

		const portfolioLightbox = GLightbox({
			selector: ".portfolio-lightbox",
		});

		new Swiper(".portfolio-details-slider", {
			speed: 400,
			loop: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true,
			},
		});
	}, []);


	return (
		<section id="portfolio" className="portfolio section-bg">
			<div className="container">
				<div className="section-title">
					<h2>Portfolio</h2>
					<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex</p>
				</div>
				<div className="row">
					<div className="col-lg-12 d-flex justify-content-center">
						<ul id="portfolio-filters">
							<li data-filter="*">All</li>
							<li data-filter=".filter-app">p1</li>
							<li data-filter=".filter-card">p2</li>
							<li data-filter=".filter-web">p3</li>
						</ul>
					</div>
				</div>
				<div className="row portfolio-container">
					{portfolioItems.map((item) => (
						<div key={item.id} className={`col-lg-4 col-md-4 col-sm-4 col-xs-12 col-12 portfolio-item ${item.filter}`}>
							<div className="portfolio-wrap">
								<img src={item.imgSrc} className="img-fluid" alt={item.title} />
								<div className="portfolio-links">
									<a href={item.imgSrc} data-gallery="portfolioGallery" className="portfolio-lightbox" title={item.title}>
										<i className="bx bx-plus"></i>
									</a>
									<a href="portfolio-details.html" title="More Details">
										<i className="bx bx-link"></i>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
