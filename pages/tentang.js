import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle, depanTitle, tentangTitle } from '../components/layout'

function Tentang() {
	return (
		<Layout>
			<Head>
				<title>{tentangTitle} | {siteTitle}</title>
			</Head>
			<section class="sub-section sub-subheader">
				<div class="container">
					<div class="sub-subheader--inner">
						<h1>{tentangTitle}</h1>
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
						<div class="col-md-12 col-sm-12 col-xs-12">
							<div class="about-content about-title">
								<h6>{tentangTitle}</h6>
								<h2>Aliansi Pencegahan dan Pengendalian Penyakit Tidak Menular</h2>
								<p>Aliansi PTM Indonesia didirikan pada 2010 dengan beranggotakan 23 organisasi dari unsur Organisasi Profesional Kedokteran dan Lembaga Swadaya Masyarakat yang peduli terhadap upaya pencegahan dan pengendalian penyakit tidak menular.  Aliansi PTM Indonesia merupakan badan koordinasi dari organisasi anggota dalam mengadakan berbagai kegiatan pengendalian faktor resiko dan penyakit tidak menular di Indonesia yang sesuai dengan visi dan misi organisasi masing-masing.</p>
								{/* <Link href="/tentang">
									<a class="banner-btn" data-text="about us"><span>Tentang</span></a>
								</Link> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="service-two">
				<div class="container">
					<div class="row">
						<div class="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
							<div class="heading text-center mb-40">
								<span class="heading__subtitle">Visi Aliansi PTM Indonesia adalah “Berperan dalam menurunkan prevalensi penyakit tidak menular dan komplikasinya melalui upaya promosi dan prevensi, deteksi dini, upaya kuratif yang efisien dan efektif, serta rehabilitasi”</span>
								<h2 class="heading__title">Visi Aliansi PTM Indonesia</h2>
							</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6">
								<div class="content">
									<img src="images/icon/water.png" class="img-fluid" alt="" />
									<div class="text">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<h5>Menyosialisasikan pemahaman</h5>
										<p>tentang penyakit tidak menular khususnya tekanan darah tinggi (hipertensi), strok, penyakit jantung koroner, diabetes mellitus, kanker dan penyakit paru obstruktif kronik kepada masyarakat</p>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="content">
									<img src="images/icon/food.png" class="img-fluid" alt="" />
									<div class="text">
										<h5>Mendorong masyarakat</h5>
										<p>untuk mengikuti gaya hidup sehat sebagai upaya untuk mencegah terjadinya penyakit tidak menular</p>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="content">
									<img src="images/icon/home.png" class="img-fluid" alt="" />
									<div class="text">
										<h5>Membantu</h5>
										<p>menyiapkan materi dan kelancaran implementasi</p>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="content">
									<img src="images/icon/time.png" class="img-fluid" alt="" />
									<div class="text">
										<h5>Menyelenggarakan kegiatan pelatihan</h5>
										<p>terutama untuk meningkatkan kualitas penyuluhan masalah hipertensi, stroke, penyakit jantung koroner, diabetes mellitus, kanker dan penyakit paru obstruktif kronik.</p>
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