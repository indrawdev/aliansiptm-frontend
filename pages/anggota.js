import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle, depanTitle, anggotaTitle } from '../components/layout'

const pageTitle = 'Anggota'

function Anggota() {
	return (
		<Layout>
			<Head>
				<title>{anggotaTitle} | {siteTitle}</title>
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
			<div class="service-three-section">
				<div class="container">
					<div class="row">
						<div class="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
							<div class="heading text-center mb-40">
								<span class="heading__subtitle">Organisasi</span>
								<h2 class="heading__title">Anggota Aliansi</h2>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-3 col-md-6">
							<div class="single-service green">
								<span>
									<Image
										src="/images/members/idi.jpg"
										alt="Ikatan Dokter Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>IDI</h3>
								<p>Ikatan Dokter Indonesia</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="single-service violet">
								<span>
									<Image
										src="/images/members/yji.png"
										alt="Yayasan Jantung Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>YJI</h3>
								<p>Yayasan Jantung Indonesia</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="single-service pink">
								<span>
									<Image
										src="/images/members/perki.jpg"
										alt="Perhimpunan Dokter Kardiovaskular Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>PERKI</h3>
								<p>Perhimpunan Dokter Kardiovaskular Indonesia</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="single-service green">
								<span>
									<Image
										src="/images/members/yki.jpg"
										alt="Yayasan Kanker Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>YKI</h3>
								<p>Yayasan Kanker Indonesia</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="single-service violet">
								<span>
									<Image
										src="/images/members/poi.jpg"
										alt="Perhimpunan Onkologi Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>POI</h3>
								<p>Perhimpunan Onkologi Indonesia</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="single-service pink">
								<span>
									<Image
										src="/images/members/idai.png"
										alt="Ikatan Dokter Anak Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>IDAI</h3>
								<p>Ikatan Dokter Anak Indonesia</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="single-service pink">
								<span><img src="images/icon/home.png" alt="Images" /></span>
								<h3>IDAI</h3>
								<p>Ikatan Dokter Anak Indonesia</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="single-service pink">
								<span><img src="images/icon/home.png" alt="Images" /></span>
								<h3>IDAI</h3>
								<p>Ikatan Dokter Anak Indonesia</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="single-service pink">
								<span><img src="images/icon/home.png" alt="Images" /></span>
								<h3>IDAI</h3>
								<p>Ikatan Dokter Anak Indonesia</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="single-service pink">
								<span><img src="images/icon/home.png" alt="Images" /></span>
								<h3>IDAI</h3>
								<p>Ikatan Dokter Anak Indonesia</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="single-service pink">
								<span><img src="images/icon/home.png" alt="Images" /></span>
								<h3>IDAI</h3>
								<p>Ikatan Dokter Anak Indonesia</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Anggota