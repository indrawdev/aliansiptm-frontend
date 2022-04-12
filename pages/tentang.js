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
			<section className="sub-section sub-subheader header-tentang">
				<div className="container">
					<div className="sub-subheader--inner">
						<h1>{tentangTitle}</h1>
						<div className="breadcrumbs-wrapper">
							<ul className="breadcrumbs">
								<li>
									<Link href="/">
										<a><i className="fa fa-home"></i> {depanTitle}</a>
									</Link>
									<span>/</span>
								</li>
								<li> {tentangTitle} </li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="about-area section">
				<div className="container">
					<div className="row d-flex align-content-center">
						<div className="col-md-12 col-sm-12 col-xs-12">
							<div className="about-content about-title">
								<h6>{tentangTitle}</h6>
								<h2>Aliansi Pencegahan dan Pengendalian Penyakit Tidak Menular</h2>
								<p>Aliansi PTM Indonesia didirikan pada 2010 dengan beranggotakan 23 organisasi dari unsur Organisasi Profesional Kedokteran dan Lembaga Swadaya Masyarakat yang peduli terhadap upaya pencegahan dan pengendalian penyakit tidak menular.  Aliansi PTM Indonesia merupakan badan koordinasi dari organisasi anggota dalam mengadakan berbagai kegiatan pengendalian faktor resiko dan penyakit tidak menular di Indonesia yang sesuai dengan visi dan misi organisasi masing-masing.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="service-two">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
							<div className="heading text-center mb-40">
								<span className="heading__subtitle">Visi Aliansi PTM Indonesia adalah “Berperan dalam menurunkan prevalensi penyakit tidak menular dan komplikasinya melalui upaya promosi dan prevensi, deteksi dini, upaya kuratif yang efisien dan efektif, serta rehabilitasi”</span>
								<h2 className="heading__title">Visi Aliansi PTM Indonesia</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="content">
								<img src="images/icon/water.png" className="img-fluid" alt="" />
								<div className="text">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<h5>Menyosialisasikan pemahaman</h5>
									<p>tentang penyakit tidak menular khususnya tekanan darah tinggi (hipertensi), strok, penyakit jantung koroner, diabetes mellitus, kanker dan penyakit paru obstruktif kronik kepada masyarakat</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="content">
								<img src="images/icon/food.png" className="img-fluid" alt="" />
								<div className="text">
									<h5>Mendorong masyarakat</h5>
									<p>untuk mengikuti gaya hidup sehat sebagai upaya untuk mencegah terjadinya penyakit tidak menular</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="content">
								<img src="images/icon/home.png" className="img-fluid" alt="" />
								<div className="text">
									<h5>Membantu</h5>
									<p>menyiapkan materi dan kelancaran implementasi</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="content">
								<img src="images/icon/time.png" className="img-fluid" alt="" />
								<div className="text">
									<h5>Menyelenggarakan kegiatan pelatihan</h5>
									<p>terutama untuk meningkatkan kualitas penyuluhan masalah hipertensi, stroke, penyakit jantung koroner, diabetes mellitus, kanker dan penyakit paru obstruktif kronik.</p>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className="col-sm-12 col-md-12 col-lg-12">
							<div className="heading text-center mb-40 mt-40">
								<h2 className="heading__title">Susunan Pengurus Aliansi PTM Indonesia periode 2021-2023:</h2>
							</div>
							<table className="table text">
								<tbody>
									<tr>
										<td>Ketua Umum</td>
										<td>:</td>
										<td>Esti Nurjadin S.H.,M.Kn</td>
									</tr>
									<tr>
										<td>Sekretaris Umum</td>
										<td>:</td>
										<td>dr. Ade Meidian Ambari, Sp.JP(K), FIHA</td>
									</tr>
									<tr>
										<td>Bidang Komunikasi</td>
										<td>:</td>
										<td>Michael Dirk Roelof Maitimoe, M.Psi, Psikolog</td>
									</tr>
									<tr>
										<td>Bidang Advokasi dan Kerjasama Lembaga</td>
										<td>:</td>
										<td>
											dr. Harman Nasution, Sp.OK., M.K.K<br />
											dr. Evlina Suzanna, Sp.PA
										</td>
									</tr>
									<tr>
										<td>Bidang Edukasi</td>
										<td>:</td>
										<td>
											dr. Muhadi, Sp.PD, K-KV, FINASIM, M.Epid<br />
											Dr. dr. Soebagijo Adi Soelistijo, Sp.PD-KEMD, FINASIM, FACP<br />
											dr. Feni Fitriani, Sp.P(K)<br />
											Prof. Dr. dr. Nurpudji A. Taslim, MPH, Sp.GK(K)
										</td>
									</tr>
									<tr>
										<td>Komite Eksekutif</td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>Koordinator Program</td>
										<td>:</td>
										<td>Nanda Fauziyana</td>
									</tr>
									<tr>
										<td>Manajer Kampanye Publik</td>
										<td>:</td>
										<td>Hasna Pradityas</td>
									</tr>
									<tr>
										<td>Pakar Relasi Media</td>
										<td>:</td>
										<td>Aditya Ramadhan</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Tentang