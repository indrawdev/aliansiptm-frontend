import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle, depanTitle, kegiatanTitle } from '../../components/layout'

function Kegiatan() {
	return (
		<Layout>
			<Head>
				<title>{kegiatanTitle} | {siteTitle} </title>
			</Head>
			<section class="sub-section sub-subheader header-kegiatan">
				<div class="container">
					<div class="sub-subheader--inner">
						<h1>{kegiatanTitle}</h1>
						<div class="breadcrumbs-wrapper">
							<ul class="breadcrumbs">
								<li>
									<Link href="/">
										<a><i class="fa fa-home"></i> {depanTitle}</a>
									</Link><span>/</span>
								</li>
								<li> {kegiatanTitle}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section class="we-complete-project-area blog-area pt-100">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-12 col-lg-8">
							<div class="section-title text-center">
								<h2>Daftar Kegiatan <span class="color">Kami</span> </h2>
								<p>Kegiatan Aliansi PTM berfokus pada promotif, prefentif, dan advokasi kebijakan penyakit tidak menular di Indonesia</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Kegiatan