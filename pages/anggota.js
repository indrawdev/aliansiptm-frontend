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
			<section className="sub-section sub-subheader header-anggota">
				<div className="container">
					<div className="sub-subheader--inner">
						<h1>{anggotaTitle}</h1>
						<div className="breadcrumbs-wrapper">
							<ul className="breadcrumbs">
								<li>
									<Link href="/">
										<a><i className="fa fa-home"></i> {depanTitle}</a>
									</Link>
									<span>/</span>
								</li>
								<li> {anggotaTitle}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<div className="service-three-section">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
							<div className="heading text-center mb-40">
								<span className="heading__subtitle">Organisasi</span>
								<h2 className="heading__title">Anggota Aliansi</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="single-service green">
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
						<div className="col-lg-3 col-md-6">
							<div className="single-service violet">
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
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
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
						<div className="col-lg-3 col-md-6">
							<div className="single-service green">
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
						<div className="col-lg-3 col-md-6">
							<div className="single-service violet">
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
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
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
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/papdi.png"
										alt="Perhimpunan Dokter Spesialis Penyakit Dalam Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>PAPDI</h3>
								<p>Perhimpunan Dokter Spesialis Penyakit Dalam Indonesia</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/pdpi.png"
										alt="Perhimpunan Dokter Paru Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>PDPI</h3>
								<p>Perhimpunan Dokter Paru Indonesia</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/perdossi.jpeg"
										alt="Perhimpunan Dokter Spesialis Syaraf Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>PERDOSSI</h3>
								<p>Perhimpunan Dokter Spesialis Syaraf Indonesia</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/perhi.png"
										alt="Perhimpunan Hipertensi Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>PerHI</h3>
								<p>Perhimpunan Hipertensi Indonesia</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/pernefri.png"
										alt="Perhimpunan Nefrologi Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>PERNEFRI</h3>
								<p>Perhimpunan Nefrologi Indonesia</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/pdgki.jpeg"
										alt="Perhimpunan Dokter Spesialis Gizi Klinik Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>PDGKI</h3>
								<p>Perhimpunan Dokter Spesialis Gizi Klinik Indonesia</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/persadia.jpeg"
										alt="Persatuan Diabetes Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>PERSADIA</h3>
								<p>Persatuan Diabetes Indonesia</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/yastroki.png"
										alt="Yayasan Stroke Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>YASTROKI</h3>
								<p>Yayasan Stroke Indonesia</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/pdui.png"
										alt="Perhimpunan Dokter Umum Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>PDUI</h3>
								<p>Perhimpunan Dokter Umum Indonesia</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/alzi.png"
										alt="Yayasan Alzheimer Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>ALZI</h3>
								<p>Yayasan Alzheimer Indonesia</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/gci.jpg"
										alt="Green Crescent Indonesia"
										width={128}
										height={128}
									/>
								</span>
								<h3>GCI</h3>
								<p>Green Crescent Indonesia</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/sfj.jpg"
										width={128}
										height={128}
									/>
								</span>
								<h3>SFJ</h3>
								<p>Smoke Free Jakarta</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/sfa.png"
										width={128}
										height={128}
									/>
								</span>
								<h3>SFA</h3>
								<p>Smoke Free Agents</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/mtcc.jpeg"
										width={128}
										height={128}
									/>
								</span>
								<h3>MTCC</h3>
								<p>Muhammadiyah Tobacco Control Center</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/komnas-pt.jpg"
										width={128}
										height={128}
									/>
								</span>
								<h3>Komnas PT</h3>
								<p>Komnas Pengendalian Tembakau</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/amkri.jpg"
										width={128}
										height={128}
									/>
								</span>
								<h3>AMKRI</h3>
								<p>Aliansi Masyarakat Korban Rokok Indonesia</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-service pink">
								<span>
									<Image
										src="/images/members/pwe.jpeg"
										width={128}
										height={128}
									/>
								</span>
								<h3>PWE</h3>
								<p>Perhimpunan Wicara Esofagus</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

// export async function getStaticPaths() {
//   const res = await fetch('https://.../posts')
// 	const posts = await res.json()

// 	const paths = posts.map((post) => ({
//     params: { id: post.id },
// 	}))

// 	return { paths, fallback: false }
// }

// export async function getStaticProps() {
// 	const res = await fetch('https://.../posts')
// 	const posts = await res.json()

// 	return {
//     props: {
//       posts,
// 		},
// 		revalidate: 10,
//   }
// }

export default Anggota