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
			<section className="sub-section sub-subheader header-kegiatan">
				<div className="container">
					<div className="sub-subheader--inner">
						<h1>{kegiatanTitle}</h1>
						<div className="breadcrumbs-wrapper">
							<ul className="breadcrumbs">
								<li>
									<Link href="/">
										<a><i className="fa fa-home"></i> {depanTitle}</a>
									</Link><span>/</span>
								</li>
								<li> {kegiatanTitle}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="we-complete-project-area blog-area pt-100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-12 col-lg-8">
							<div className="section-title text-center">
								<h2>Daftar Kegiatan <span className="color">Kami</span> </h2>
								<p>Kegiatan Aliansi PTM berfokus pada promotif, prefentif, dan advokasi kebijakan penyakit tidak menular di Indonesia</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-6 col-md-12'>
							<div className="card mb-40">
								<img className="card-img-top" src="/images/kegiatan/NCD-Free-Bootcamp.jpg" alt="NCD Free Bootcamp" />
								<div className="card-body">
									<h5 className="card-title">NCD Free Bootcamp</h5>
									<p className="card-text">Dilaksanakan pada Januari 2018 yang bekerjasama dengan Fakultas Ilmu Keperawatan UI dan komunitas Smoke Free Agents.</p>
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-12'>
							<div className="card mb-40">
								<img className="card-img-top" src="/images/kegiatan/Partisipasi-dalam-Kampanye-Global.jpg" alt="Partisipasi dalam Kampanye Global #Enough" />
								<div className="card-body">
									<h5 className="card-title">Partisipasi dalam Kampanye Global #Enough</h5>
									<p className="card-text">Dilaksanakan pada September 2019 bekerjasama dengan Aliansi Korban Rokok Indonesia (AMKRI) untuk kesadaran tentang bahaya PTM yang semakin meningkat.</p>
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-12'>
							<div className="card mb-40">
								<img className="card-img-top" src="/images/kegiatan/Komitmen-Bersama-Organisasi-Peduli-PTM.jpg" alt="Komitmen Bersama Organisasi Peduli PTM" />
								<div className="card-body">
									<h5 className="card-title">Komitmen Bersama Organisasi Peduli PTM</h5>
									<p className="card-text">Dilaksanakan pada Oktober 2019 oleh organisasi anggota Aliansi PTM dengan membuat komitmen bersama pencegahan PTM di Indonesia.</p>
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-12'>
							<div className="card mb-40">
								<img className="card-img-top" src="/images/kegiatan/Partisipasi-dalam-Konferensi-Internasional-ISHR-2019.jpeg" alt="Partisipasi dalam Konferensi Internasional (ISHR 2019)" />
								<div className="card-body">
									<h5 className="card-title">Partisipasi dalam Konferensi Internasional (ISHR 2019)</h5>
									<p className="card-text">Dilaksanakan pada November 2019 bekerjasama dengan Litbangkes dan Ikatan Ahli Kesehatan Masyarkat Indonesia (IAKMI) dimana Aliansi PTM menjadi salah satu host sesi symposia tentang factor resiko dan pencegahan PTM di Indonesia.</p>
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-12'>
							<div className="card mb-40">
								<img className="card-img-top" src="/images/kegiatan/Global-NCD-Forum-2020.png" alt="Partisipasi dalam Konferensi Internasional (ISHR 2019)" />
								<div className="card-body">
									<h5 className="card-title">Global NCD Forum 2020</h5>
									<p className="card-text">Dilaksanakan pada Februari 2020 di Sharjah, UAE. Delegasi Aliansi PTM Indonesia menjadi perwakilan yang aktif dalam diskusi seputar isu pencegahan PTM bersama lebih dari 100 aliansi lainnya di beberapa Negara. Dalam momentum ini, Aliansi PTM Indonesia menjadi salah satu pelopor terbentuknya Aliansi PTM di area SEARO.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Kegiatan