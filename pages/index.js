import { useEffect, useState } from "react";
import Section from "../components/widgets/Sections";
import Layout from "../layout";

const Index = () => {
	useEffect(() => {
		document.lastScrollPostion = 0;
		document.lastCentered = 0;
		document.onWayTo = null;

		document.addEventListener("scroll", handleScroll);

		return removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		const direction = window.scrollY > document.lastScrollPostion ? "down" : "up";
		const sections = [...document.querySelectorAll("section")];

		if (document.onWayTo === null) {
			const destinationIndex = direction === "up" ? document.lastCentered - 1 : document.lastCentered + 1;
			if (destinationIndex >= 0 && destinationIndex < sections.length) {
				document.onWayTo = destinationIndex;
				window.scroll(0, sections[destinationIndex].offsetTop);
			}
		}

		sections.forEach((section, index) => {
			if (window.scrollY === section.offsetTop) {
				document.lastCentered = index;
				section.classList.add("active");
				if (document.onWayTo === index) {
					document.onWayTo = null;
				}
			} else {
				section.classList.remove("active");
			}
		});

		document.lastScrollPostion = window.scrollY;
	};

	return (
		<Layout>
			<Section bgImg='model-3.jpg' title='Model 3' description='Order online for Touchless Delivery' isActive />
			<Section bgImg='model-y.jpg' title='Model Y' description='Order online for Touchless Delivery' />
			<Section bgImg='model-s.jpg' title='Model S' description='Order online for Touchless Delivery' />
			<Section bgImg='model-x.jpg' title='Model X' description='Order online for Touchless Delivery' />
			<Section bgImg='solar-panels.jpg' title='Solar Panels' description='Order online for Touchless Delivery' />
			<Section bgImg='solar-roof.jpg' title='Solar Roof' description='Order online for Touchless Delivery' />
			<Section bgImg='accessories.jpg' title='Accessories' description='Order online for Touchless Delivery' />
		</Layout>
	);
};

export default Index;
