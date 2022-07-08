const Section = ({ bgImg = "", title = "", description = "", isActive = false }) => {
	return (
		<>
			<section className={isActive && "active"}>
				<div className='content'>
					<h1>{title}</h1>
					<p>{description}</p>

					<div className='buttons'>
						<a href=''>Custom order</a>
						<a href=''>Exisiting inventory</a>
					</div>
				</div>
			</section>

			<style jsx>{`
				section {
					height: 100vh;
					background-image: url(img/${bgImg});
					background-size: cover;
					background-position: center;
				}

				section .content {
					position: fixed;
					top: 0;
					width: 100%;
					height: 100vh;
					padding: 15vh 0px;
					opacity: 0;
					text-align: center;
					display: grid;
					grid-template-rows: min-content auto min-content;
					transition: opacity 0.3s ease;
				}

				section.active .content {
					opacity: 1;
				}

				h1 {
					font-size: 3rem;
				}

				.buttons {
					display: grid;
					row-gap: 20px;
					margin: 0px 40px;
				}

				.buttons a {
					display: block;
					background: #eee;
					color: inherit;
					padding: 12px 50px;
					border-radius: 25px;
					text-transform: uppercase;
					font-size: 12px;
					font-weight: 500;
				}

				.buttons a:first-child {
					background: #444;
					color: #fff;
				}

				@media (min-width: 970px) {
					.buttons {
						max-width: 640px;
						margin: 0 auto;
						grid-template-columns: 1fr 1fr;
						column-gap: 20px;
					}
				}
			`}</style>
		</>
	);
};

export default Section;
