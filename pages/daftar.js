import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

const pageTitle = 'Daftar'

function Daftar() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
				<meta
					name="description"
					content="Daftar | ${{siteTitle}}"
				/>
			</Head>
		</Layout>
	)
}

export default Daftar