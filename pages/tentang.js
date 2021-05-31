import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { depanTitle, tentangTitle } from '../components/layout'

function Tentang() {
	return (
		<Layout>
			<Head>
				<title>{tentangTitle}</title>
			</Head>
			<section class="sub-section sub-subheader">
				<div class="container">
					<div class="sub-subheader--inner">
						<h1>{ tentangTitle }</h1>
						<div class="breadcrumbs-wrapper">
							<ul class="breadcrumbs">
								<li>
									<Link href="/">
										<a><i class="fa fa-home"></i> {depanTitle}</a>
									</Link>
									<span>/</span>
								</li>
								<li> {tentangTitle} </li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section class="about-area section">
				<div class="container">
					<div class="row d-flex align-content-center">
						<div class="col-md-6 col-sm-6 col-xs-12">
							<div class="about-content about-title">
								<h6>{ tentangTitle }</h6>
								<h2>Our Mission To Help Them</h2>
								<p>Aliansi Pencegahan dan Pengendalian Penyakit Tidak Menular (Aliansi PTM) Indonesia didirikan pada 2010 dengan beranggotakan 23 organisasi dari unsur Organisasi Profesional Kedokteran dan Lembaga Swadaya Masyarakat yang peduli terhadap upaya pencegahan dan pengendalian penyakit tidak menular.  Aliansi PTM Indonesia merupakan badan koordinasi dari organisasi anggota dalam mengadakan berbagai kegiatan pengendalian faktor resiko dan penyakit tidak menular di Indonesia yang sesuai dengan visi dan misi organisasi masing-masing.</p>
								<Link href="/tentang">
									<a class="banner-btn"  data-text="about us"><span>Tentang</span></a>
								</Link>
							</div>
						</div>
						<div class="col-md-6 col-sm-6 col-xs-12">
							<div class="about-main-head">
								<div class="row">
									<div class="col-lg-6 col-md-12">
										<div class="about-card">
											<a href="#">
												<Image
													src="/images/about/ab-1.jpg"
													class="img-fluid"
													alt={tentangTitle}
													layout="fill"
												/>
											</a>
											<div class="about-img-heading">
												<h6>Let's Make them Happy</h6>
											</div>
										</div>

									</div>
									<div class="col-lg-6 col-md-12">
										<div class="about-card">
											<a href="#">
												<img src="images/about/ab-2.jpg" class="img-fluid" alt="about" /></a>

											<div class="about-img-heading">
												<h6>Let's Make them Happy</h6>
											</div>
										</div>
									</div>
									<div class="col-sm-12">
										<div class="about-card">
											<a href="#">
												<img src="images/about/ab-3.jpg" class="img-fluid" alt="about" /></a>

											<div class="about-img-heading">
												<h6>Let's Make them Happy</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Tentang