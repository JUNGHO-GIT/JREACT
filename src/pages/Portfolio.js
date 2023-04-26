import React, {useEffect} from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import Swiper from "swiper";
import "../App.css";

function Portfolio() {
	useEffect(() => {
		let portfolioContainer = document.querySelector(".portfolio-container");
		if (portfolioContainer) {
			let portfolioIsotope = new Isotope(portfolioContainer, {
				itemSelector: ".portfolio-item",
			});
			let portfolioFilters = document.querySelectorAll("#portfolio-filters li");

			portfolioFilters.forEach(function (el) {
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
					<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
				</div>
				<div className="row">
					<div className="col-lg-12 d-flex justify-content-center">
						<ul id="portfolio-filters">
							<li data-filter=".filter-app">p1</li>
							<li data-filter=".filter-card">p2</li>
							<li data-filter=".filter-web">p3</li>
						</ul>
					</div>
				</div>

				<div className="row portfolio-container">
					<div className="col-lg-4 col-md-6 portfolio-item filter-app">
						<div className="portfolio-wrap">
							<img src={process.env.PUBLIC_URL + "/images/portfolio/portfolio-1.jpg"} className="img-fluid" alt="image1" />
							<div className="portfolio-links">
								<a href="img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
									<i className="bx bx-plus"></i>
								</a>
								<a href="portfolio-details.html" title="More Details">
									<i className="bx bx-link"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 portfolio-item filter-card">
						<div className="portfolio-wrap">
							<img src={process.env.PUBLIC_URL + "/images/portfolio/portfolio-2.jpg"} className="img-fluid" alt="image2" />
							<div className="portfolio-links">
								<a href={process.env.PUBLIC_URL + "/images/portfolio/portfolio-2.jpg"} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3">
									<i className="bx bx-plus"></i>
								</a>
								<a href="portfolio-details.html" title="More Details">
									<i className="bx bx-link"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 portfolio-item filter-web">
						<div className="portfolio-wrap">
							<img src={process.env.PUBLIC_URL + "/images/portfolio/portfolio-3.jpg"} className="img-fluid" alt="image3" />
							<div className="portfolio-links">
								<a href={process.env.PUBLIC_URL + "/images/portfolio/portfolio-3.jpg"} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2">
									<i className="bx bx-plus"></i>
								</a>
								<a href="portfolio-details.html" title="More Details">
									<i className="bx bx-link"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
