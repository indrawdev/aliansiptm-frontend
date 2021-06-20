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
			<section class="sub-section sub-subheader header-daftar">
				<div class="container">
					<div class="sub-subheader--inner">
						<h1>{daftarTitle}</h1>
						<div class="breadcrumbs-wrapper">
							<ul class="breadcrumbs">
								<li>
									<Link href="/">
										<a><i class="fa fa-home"></i> {depanTitle}</a>
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