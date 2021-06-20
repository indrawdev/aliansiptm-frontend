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
				<meta name="viewport" name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
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
				<div class="header-top-area">
					<div class="container">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-12">
								<div class="headers-left">
									<div class="headers-left-text">
										<div class="headers-left-icon">
											<i class="fa fa-envelope"></i>
										</div>
										<div class="headers-left-text">
											<p>
												<Link href="mailto:aliansi.ptm@gmail.com">
													<a>aliansi.ptm@gmail.com</a>
												</Link>
											</p>
										</div>
									</div>
									<div class="headers-left-text">
										<div class="headers-left-icon">
											<i class="fa fa-home"></i>
										</div>
										<div class="headers-left-text">
											<p>Alamat: Jl. Teuku Umar No.8, Jakarta Pusat</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-sm-6  col-xs-12">
								<div class="header-rights">
									<Link href="/daftar">
										<a ><i class="fa fa-user-plus"></i>DAFTAR</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="main-header-menu">
					<div class="container">
						<Link href="/">
							<a>
								<Image
									src="/images/logo/aliansi-ptm.png"
									class="one logo img-fluid"
									alt={siteTitle}
									width={300}
									height={74}
								/>
							</a>
						</Link>
						<nav class="navbar navbar-expand-lg">

							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
								aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<i class="fa fa-bars"></i>
							</button>
							<div id="navbarNavDropdown" class="navbar-collapse collapse ml-auto">
								<i class="fa fa-times" id="resMenuCloseIcon" data-toggle="collapse" data-target="#navbarNavDropdown"
									aria-controls="navbarNavDropdown" aria-expanded="true"></i>
								<ul class="navbar-nav mr-auto">
									<li class="nav-item">
										<Link href="/">
											<a className={`nav-link ${router.pathname == "/" ? "active" : ""}`}>Depan</a>
										</Link>
									</li>
									<li class="nav-item">
										<Link href="/tentang">
											<a className={`nav-link ${router.pathname == "/tentang" ? "active" : ""}`}>Tentang</a>
										</Link>
									</li>
									<li class="nav-item">
										<Link href="/kegiatan">
											<a className={`nav-link ${router.pathname == "/kegiatan" ? "active" : ""}`}>Kegiatan</a>
										</Link>
									</li>
									<li class="nav-item">
										<Link href="/anggota">
											<a className={`nav-link ${router.pathname == "/anggota" ? "active" : ""}`}>Anggota</a>
										</Link>
									</li>
									<li class="nav-item">
										<Link href="/testimoni">
											<a className={`nav-link ${router.pathname == "/testimoni" ? "active" : ""}`}>Testimoni</a>
										</Link>
									</li>
									<li class="nav-item">
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

			<footer class="footer">
				<div class="footer--top black-bg">
					<div class="container">
						<div class="row">
							<div class="col-lg-4 col-md-6 col-sm-12">
								<div class="cab-widget widget-image">
									<div class="cab-aside--logo">
										<Link href="/">
											<a>
												<Image
													src="/images/logo/aliansi-ptm.png"
													class="one logo img-fluid"
													alt={siteTitle}
													width={300}
													height={74}
												/>
											</a>
										</Link>
									</div>
								</div>
								<div class="cab-widget widget-text">
									<p>Aliansi PTM Indonesia merupakan badan koordinasi dari organisasi anggota dalam mengadakan berbagai kegiatan pengendalian faktor resiko dan penyakit tidak menular di Indonesia</p>
								</div>
								<div class="cab-widget widget-social-media">
									<Link href="https://www.facebook.com/aliansi.ptm">
										<a target="_blank"><i class="fa fa-facebook"></i></a>
									</Link>
									<Link href="https://twitter.com/aliansi_ptm">
										<a target="_blank"><i class="fa fa-twitter"></i></a>
									</Link>
									<Link href="https://www.instagram.com/aliansi.ptm">
										<a target="_blank"><i class="fa fa-instagram"></i></a>
									</Link>
									<Link href="https://www.linkedin.com/company/aliansi-ptm">
										<a target="_blank"><i class="fa fa-linkedin"></i></a>
									</Link>
								</div>
							</div>
							<div class="col-lg-4 col-md-6 col-sm-12 col-ms-12 hidden-xs hidden-sm">
								<div class="cab-widget">
									<h3 class="cab-widget--title">Explore</h3>
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
							<div class="col-lg-4 col-md-12 col-sm-12 col-ms-12 hidden-xs hidden-sm hidden-md">
								<div class="cab-widget">
									<h3 class="cab-widget--title">Newsletter</h3>
									<form method="post">
										<div class="has-icon">
											<input type="text" class="form-control" placeholder="Email Address" value="" />
											<i class="fa fa-paper-plane"></i>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="footer--bottom secondary-bg">
					<div class="container">
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