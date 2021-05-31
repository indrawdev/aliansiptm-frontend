import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { depanTitle, testimoniTitle } from '../components/layout'

function Testimoni() {
	return (
		<Layout>
			<Head>
				<title>{testimoniTitle}</title>
			</Head>
			<section class="sub-section sub-subheader">
				<div class="container">
					<div class="sub-subheader--inner">
						<h1>{testimoniTitle}</h1>
						<div class="breadcrumbs-wrapper">
							<ul class="breadcrumbs">
								<li>
									<Link href="/">
										<a><i class="fa fa-home"></i> {depanTitle}</a>
									</Link>
									<span>/</span>
								</li>
								<li> {testimoniTitle}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Testimoni