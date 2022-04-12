import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle, depanTitle, testimoniTitle } from '../components/layout'

function Testimoni() {
	return (
		<Layout>
			<Head>
				<title>{testimoniTitle} | {siteTitle}</title>
			</Head>
			<section className="sub-section sub-subheader header-testimoni">
				<div className="container">
					<div className="sub-subheader--inner">
						<h1>{testimoniTitle}</h1>
						<div className="breadcrumbs-wrapper">
							<ul className="breadcrumbs">
								<li>
									<Link href="/">
										<a><i className="fa fa-home"></i> {depanTitle}</a>
									</Link>
									<span>/</span>
								</li>
								<li> {testimoniTitle}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="testimonial">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-12 col-lg-8">
							<div className="section-title text-center">
								<h2>Testimoni</h2>
								{/* <p>Our donation will help us save and improve lives with research, education and emergency care.</p> */}
							</div>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div className="inner-testimonial owl-carousel">
								<div className="text-center testimonial-data mx-auto mb-40">
									<div className="testimonial-icon text-custom">
										<i className="fa fa-quote-left" aria-hidden="true"></i>
									</div>
									<div className="mt-4">
										<div className="testimonial-img">
											<img src="/images/testimonials/Farrukh-Qureshi.jpg" alt="Dr. Farukh Qureshi"
												class="mx-auto img-fluid d-block img-thumbnail rounded-circle" />
										</div>
										<div className="testimonial-detail">
											<p className="client-review mt-4 text-center font-italic">"Setiap tahun ada 40 juta orang meninggal akibat penyakit tidak menular, 15 juta diantaranya meninggal di usia 30-70 tahun. Artinya, setiap 2 detik seseorang mati premature akibat penyakit ini. Hampir dua pertiga dari total kematian akibat penyakit tidak menular terkait dengan konsumsi rokok, alcohol, diet tidak sehat, dan aktifitas fisik yang kurang."</p>
											<p className="client-name text-center font-weight-bold mb-0 mt-4">Dr. Farukh Qureshi</p>
											<p className="client-name position text-center mb-0 mt-1">WHO Indonesia</p>
										</div>
									</div>
								</div>
								<div className="text-center testimonial-data mx-auto mb-40">
									<div className="testimonial-icon text-custom">
										<i className="fa fa-quote-left" aria-hidden="true"></i>
									</div>
									<div className="mt-4">
										<div className="testimonial-img">
											<img src="/images/testimonials/Guido-Girardi.jpg" alt="Guido Gerardi"
												class="mx-auto img-fluid d-block img-thumbnail rounded-circle" />
										</div>
										<div className="testimonial-detail">
											<p className="client-review mt-4 text-center font-italic">“Saya berharap semakin banyak masyarakat yang menyadari bahwa PTM merupakan penyakit yang menyebar bahkan lebih luas dari penyakit menular. Sistem kebijakan makanan di suatu Negara harus dibuat untuk memperbaiki kesehatan masyarakat, bukan sebaliknya.”</p>
											<p className="client-name text-center font-weight-bold mb-0 mt-4">Guido Gerardi</p>
											<p className="client-name position text-center mb-0 mt-1">Anggota Senat Chile</p>
										</div>
									</div>
								</div>
								<div className="text-center testimonial-data mx-auto mb-40">
									<div className="testimonial-icon text-custom">
										<i className="fa fa-quote-left" aria-hidden="true"></i>
									</div>
									<div className="mt-4">
										<div className="testimonial-img">
											<img src="/images/testimonials/Zoleka-Mandela.jpg" alt="Zoleka-Mandela"
												class="mx-auto img-fluid d-block img-thumbnail rounded-circle" />
										</div>
										<div className="testimonial-detail">
											<p className="client-review mt-4 text-center font-italic">“Suara penyitas kanker adalah senjata yang kuat untuk membuat perubahan bagi masyarakat.”</p>
											<p className="client-name text-center font-weight-bold mb-0 mt-4">Zoleka Mandela</p>
											<p className="client-name position text-center mb-0 mt-1">Aktivis Kesetaraan Gender dan Penyitas Kanker</p>
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

export default Testimoni