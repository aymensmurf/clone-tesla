import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Electric Cars, Solar & Clean Energy | Tesla</title>
			</Head>

			<Header />

			{children}
		</>
	);
};

export default Layout;
