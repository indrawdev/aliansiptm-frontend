import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle, depanTitle, kontakTitle } from '../components/layout'

function Kontak() {
	return (
		<Layout>
			<Head>
				<title>{kontakTitle} | {siteTitle}</title>
			</Head>
			<section class="sub-section sub-subheader">
				<div class="container">
					<div class="sub-subheader--inner">
						<h1>{kontakTitle}</h1>
						<div class="breadcrumbs-wrapper">
							<ul class="breadcrumbs">
								<li>
									<Link href="/">
										<a><i class="fa fa-home"></i> {depanTitle}</a>
									</Link>
									<span>/</span>
								</li>
								<li> {kontakTitle}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Kontak