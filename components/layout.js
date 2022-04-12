import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const siteTitle = 'Aliansi PTM'
export const depanTitle = 'Depan'
export const tentangTitle = 'Tentang Kami'
export const kegiatanTitle = 'Kegiatan'
export const anggotaTitle = 'Anggota'
export const testimoniTitle = 'Testimoni'
export const kontakTitle = 'Kontak Kami'
export const daftarTitle = 'Daftar'

export default function Layout({ children }) {
	const router = useRouter()
	const date = new Date()

	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
				<meta
					name="description"
					content="Aliansi PTM Indonesia merupakan badan koordinasi dari organisasi anggota dalam mengadakan berbagai kegiatan pengendalian faktor resiko dan penyakit tidak menular di Indonesia"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>
				<link href="/assets/poper/css/popper.css" rel="stylesheet" />
				<link href="/assets/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
			</Head>
			<header>
				<div className="header-top-area">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-6 col-xs-12">
								<div className="headers-left">
									<div className="headers-left-text">
										<div className="headers-left-icon">
											<i className="fa fa-envelope"></i>
										</div>
										<div className="headers-left-text">
											<p>
												<Link href="mailto:aliansi.ptm@gmail.com">
													<a>aliansi.ptm@gmail.com</a>
												</Link>
											</p>
										</div>
									</div>
									<div className="headers-left-text">
										<div className="headers-left-icon">
											<i className="fa fa-home"></i>
										</div>
										<div className="headers-left-text">
											<p>Alamat: Jl. Teuku Umar No.8, Jakarta Pusat</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-6  col-xs-12">
								<div className="header-rights">
									<Link href="https://forms.gle/sDvyFq19SJdGkgZp8">
										<a target="_blank"><i className="fa fa-user-plus"></i>JADI RELAWAN</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="main-header-menu">
					<div className="container">
						<Link href="/">
							<a>
								<Image
									src="/images/logo/aliansi-ptm.png"
									className="one logo img-fluid"
									alt={siteTitle}
									width={300}
									height={74}
								/>
							</a>
						</Link>
						<nav className="navbar navbar-expand-lg">

							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
								aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<i className="fa fa-bars"></i>
							</button>
							<div id="navbarNavDropdown" className="navbar-collapse collapse ml-auto">
								<i className="fa fa-times" id="resMenuCloseIcon" data-toggle="collapse" data-target="#navbarNavDropdown"
									aria-controls="navbarNavDropdown" aria-expanded="true"></i>
								<ul className="navbar-nav mr-auto">
									<li className="nav-item">
										<Link href="/">
											<a className={`nav-link ${router.pathname == "/" ? "active" : ""}`}>Depan</a>
										</Link>
									</li>
									<li className="nav-item">
										<Link href="/tentang">
											<a className={`nav-link ${router.pathname == "/tentang" ? "active" : ""}`}>Tentang</a>
										</Link>
									</li>
									<li className="nav-item">
										<Link href="/kegiatan">
											<a className={`nav-link ${router.pathname == "/kegiatan" ? "active" : ""}`}>Kegiatan</a>
										</Link>
									</li>
									<li className="nav-item">
										<Link href="/anggota">
											<a className={`nav-link ${router.pathname == "/anggota" ? "active" : ""}`}>Anggota</a>
										</Link>
									</li>
									<li className="nav-item">
										<Link href="/testimoni">
											<a className={`nav-link ${router.pathname == "/testimoni" ? "active" : ""}`}>Testimoni</a>
										</Link>
									</li>
									<li className="nav-item">
										<Link href="/kontak">
											<a className={`nav-link ${router.pathname == "/kontak" ? "active" : ""}`}>Kontak</a>
										</Link>
									</li>
								</ul>

							</div>
						</nav>
					</div>
				</div>
			</header>

			{children}

			<footer className="footer">
				<div className="footer--top black-bg">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="cab-widget widget-image">
									<div className="cab-aside--logo">
										<Link href="/">
											<a>
												<Image
													src="/images/logo/aliansi-ptm.png"
													className="one logo img-fluid"
													alt={siteTitle}
													width={300}
													height={74}
												/>
											</a>
										</Link>
									</div>
								</div>
								<div className="cab-widget widget-text">
									<p>Aliansi PTM Indonesia merupakan badan koordinasi dari organisasi anggota dalam mengadakan berbagai kegiatan pengendalian faktor resiko dan penyakit tidak menular di Indonesia</p>
								</div>
								<div className="cab-widget widget-social-media">
									<Link href="https://www.facebook.com/aliansi.ptm">
										<a target="_blank"><i className="fa fa-facebook"></i></a>
									</Link>
									<Link href="https://twitter.com/aliansi_ptm">
										<a target="_blank"><i className="fa fa-twitter"></i></a>
									</Link>
									<Link href="https://www.instagram.com/aliansi.ptm">
										<a target="_blank"><i className="fa fa-instagram"></i></a>
									</Link>
									<Link href="https://www.linkedin.com/company/aliansi-ptm">
										<a target="_blank"><i className="fa fa-linkedin"></i></a>
									</Link>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 col-ms-12 hidden-xs hidden-sm">
								<div className="cab-widget">
									<h3 className="cab-widget--title">Explore</h3>
									<ul>
										<li>
											<Link href="/">
												<a>{depanTitle}</a>
											</Link>
										</li>
										<li>
											<Link href="/tentang">
												<a>{tentangTitle}</a>
											</Link>
										</li>
										<li>
											<Link href="/kontak">
												<a>{kontakTitle}</a>
											</Link>
										</li>
										<li>
											<Link href="/testimoni">
												<a>{testimoniTitle}</a>
											</Link>
										</li>
										<li>
											<Link href="/anggota">
												<a>{anggotaTitle}</a>
											</Link>
										</li>
										<li>
											<Link href="/kegiatan">
												<a>{kegiatanTitle}</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 col-ms-12 hidden-xs hidden-sm hidden-md">
								<div className="cab-widget">
									<h3 className="cab-widget--title">Newsletter</h3>
									<form method="post">
										<div className="has-icon">
											<input type="text" className="form-control" placeholder="Email Address" value="" />
											<i className="fa fa-paper-plane"></i>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer--bottom secondary-bg">
					<div className="container">
						<p>Copyright {date.getFullYear()} - All rights reserved</p>
					</div>
				</div>
			</footer>
			<script src="/assets/jquery/jquery-3.2.1.min.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
			{/* <script src="/js/main.js"></script> */}
		</div>
	)
}