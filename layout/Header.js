import { useState } from "react";
import Image from "next/image";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<>
			<header>
				<a href='#' className='logo'>
					<Image src='/img/logo.svg' alt='Tesla' width={120} height={24} />
				</a>

				<nav className='center desktop'>
					<a href='#'>Model S</a>
					<a href='#'>Model 3</a>
					<a href='#'>Model X</a>
					<a href='#'>Model Y</a>
					<a href='#'>Solar Roof</a>
					<a href='#'>Solar Panels</a>
				</nav>

				<nav className='right'>
					<a href='#' className='desktop'>
						Shop
					</a>
					<a href='#' className='desktop'>
						Account
					</a>
					<a
						onClick={() => {
							setIsMenuOpen(true);
						}}>
						Menu
					</a>
				</nav>
			</header>

			<div className='backdrop'></div>

			<aside>
				<button
					className='close'
					onClick={() => {
						setIsMenuOpen(false);
					}}>
					&times;
				</button>
				<a href='#'> Model S</a>
				<a href='#'> Model 3</a>
				<a href='#'> Model X</a>
				<a href='#'> Model Y</a>
				<a href='#'> Solar Roof</a>
				<a href='#'> Solar Panels</a>
				<a href='#'> Existing Inventory</a>
				<a href='#'> Used Inventory</a>
				<a href='#'> Trade-In</a>
				<a href='#'> Test Drive</a>
				<a href='#'> Insurance</a>
				<a href='#'> Powerwall</a>
				<a href='#'> Commercial Energy</a>
				<a href='#'> Utilities</a>
				<a href='#'> Charging</a>
				<a href='#'> Find Us</a>
				<a href='#'> Support</a>
				<a href='#'> Investor Relations</a>
				<a href='#'> Shop</a>
				<a href='#'> Account</a>
			</aside>

			<style jsx>{`
				header {
					display: grid;
					grid-template-columns: auto 1fr auto;
					padding: 20px 60px;
					position: fixed;
					top: 0;
					z-index: 2;
					width: 100%;
				}

				header nav a {
					padding: 5px 10px;
					cursor: pointer;
					font-size: 14px;
					font-weight: 500;
				}

				header nav.center {
					text-align: center;
				}

				header nav.right {
					text-align: right;
				}

				aside {
					position: fixed;
					width: 320px;
					height: 100vh;
					background: #fff;
					padding: 60px 40px;
					z-index: 4;
					transition: right 0.4s ease;
					right: ${isMenuOpen ? "0px" : "-320px"};
				}

				aside a {
					display: block;
					padding: 10px 0px;
					font-size: 14px;
					font-weight: 500;
				}

				aside .close {
					font-size: 24px;
					border: 0;
					background: transparent;
					position: absolute;
					top: 10px;
					right: 10px;
					padding: 10px;
					font-family: sans-serif;
					font-weight: 100;
					cursor: pointer;
				}

				.backdrop {
					position: fixed;
					z-index: 3;
					inset: 0;
					background: rgba(0, 0, 0, 0.35);
					backdrop-filter: blur(5px);
					display: ${isMenuOpen ? "block" : "none"};
				}
			`}</style>
		</>
	);
};

export default Header;
