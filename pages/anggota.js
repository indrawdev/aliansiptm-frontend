import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { depanTitle, anggotaTitle } from '../components/layout'

const pageTitle = 'Anggota'

function Anggota() {
	return (
		<Layout>
			<Head>
				<title>{anggotaTitle}</title>
			</Head>
			<section class="sub-section sub-subheader">
				<div class="container">
					<div class="sub-subheader--inner">
						<h1>{anggotaTitle}</h1>
						<div class="breadcrumbs-wrapper">
							<ul class="breadcrumbs">
								<li>
									<Link href="/">
										<a><i class="fa fa-home"></i> {depanTitle}</a>
									</Link>
									<span>/</span>
								</li>
								<li> {anggotaTitle}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Anggota