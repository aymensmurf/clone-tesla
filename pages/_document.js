import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='shortcut icon' href='/img/favicon.png' type='image/png' />

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
				<link href='https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@400;500&display=swap' rel='stylesheet' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
