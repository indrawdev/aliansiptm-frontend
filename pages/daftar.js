import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle, depanTitle, daftarTitle } from '../components/layout'

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
			<section className="sub-section sub-subheader header-daftar">
				<div className="container">
					<div className="sub-subheader--inner">
						<h1>{daftarTitle}</h1>
						<div className="breadcrumbs-wrapper">
							<ul className="breadcrumbs">
								<li>
									<Link href="/">
										<a><i className="fa fa-home"></i> {depanTitle}</a>
									</Link>
									<span>/</span>
								</li>
								<li> {daftarTitle}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Daftar