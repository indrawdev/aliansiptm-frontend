import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Indra Pramana'
export const siteTitle = 'AliansiPTM'

export default function Layout({ children, home }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Aliansi Penyakit Dalam"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<script type="text/javascript" src="/js/myscript.js"></script>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>
				<link href="assets/owl/owl.carousel.css" rel="stylesheet" />
				<link href="assets/poper/css/popper.css" rel="stylesheet" />
				<link href="assets/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
				<script src="assets/jquery/jquery-3.2.1.min.js"></script>
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
				<script src="assets/owl/owl.carousel.min.js"></script>
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
											<p>aliansi.ptm@gmail.com</p>
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
									src="/images/logo/logo-two.png"
									class="one logo img-fluid"
									alt="logo"
									width={229}
									height={83}
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
											<a class="nav-link">Depan</a>
										</Link>
									</li>
									<li class="nav-item">
										<Link href="/tentang">
											<a class="nav-link">Tentang</a>
										</Link>
									</li>
									<li class="nav-item">
										<Link href="/kegiatan">
											<a class="nav-link">Kegiatan</a>
										</Link>
									</li>
									<li class="nav-item">
										<Link href="/anggota">
											<a class="nav-link">Anggota</a>
										</Link>
									</li>
									<li class="nav-item">
										<Link href="/testimoni">
											<a class="nav-link">Testimoni</a>
										</Link>
									</li>
									<li class="nav-item">
										<Link href="/kontak">
											<a class="nav-link">Kontak</a>
										</Link>
									</li>
								</ul>

							</div>
						</nav>
					</div>
				</div>
			</header>

			<main>{children}</main>
			<footer>
				<div class="footer--top black-bg">
					<div class="container">
						<div class="row">

							<div class="col-lg-4 col-md-6 col-sm-12">
								<div class="cab-widget widget-image">
									<div class="cab-aside--logo">
										<a href="index.html"><img src="images/logo/logo-two.png" class="img-fluid logo" alt="loog" /></a>
									</div>
								</div>
								<div class="cab-widget widget-text">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
					has been the industry's standard dummy</p>
								</div>
								<div class="cab-widget widget-social-media">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-instagram"></i></a>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 col-sm-12 col-ms-12 hidden-xs hidden-sm">
								<div class="cab-widget">
									<h3 class="cab-widget--title">Explore</h3>
									<ul>
										<li> <a href="#">Home</a> </li>
										<li> <a href="#">About Us</a> </li>
										<li> <a href="#">Contact Us</a> </li>
										<li> <a href="#">Cases</a> </li>
										<li> <a href="#">Cause</a> </li>
										<li> <a href="#">Events</a> </li>
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
						<p>Copyright 2021. All rights reserved</p>
					</div>
				</div>
			</footer>
		</div>
	)
}