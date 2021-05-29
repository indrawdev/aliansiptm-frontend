import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
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
				<script src="assets/jquery/jquery-3.2.1.min.js"></script>
				<script src="assets/bootstrap-4/dist/js/bootstrap.min.js"></script>
				<script src="assets/owl/owl.carousel.min.js"></script>
				<link href="assets/bootstrap-4/dist/css/bootstrap.min.css" rel="stylesheet" />
				<link href="assets/owl/owl.carousel.css" rel="stylesheet" />
				<link href="assets/poper/css/popper.css" rel="stylesheet" />
				<link href="assets/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
			</Head>
			<header>
				<div className={styles.header_top_area}>
					<div class="container">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-12">
								<div className={styles.headers_left}>
									<div className={styles.headers_left_text}>
										<div className={styles.headers_left_icon}>
											<i class="fa fa-phone"></i>
										</div>
										<div className={styles.headers_left_text}>
											<p>+123456789</p>
										</div>
									</div>
									<div className={styles.headers_left_text}>
										<div className={styles.headers_left_icon}>
											<i class="fa fa-home"></i>
										</div>
										<div className={styles.headers_left_text}>
											<p>2021 New York, USA</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-12">
								<div className={styles.header_rights}>
									<a href="#"><i class="fa fa-usd"></i>Donate Now</a></div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.main_header_menu}>
					<div class="container">
						<Link href="/">
							<a>
								<Image
									src="/images/logo/logo-two.png"
									className={styles.logo}
									class="one img-fluid"
									alt="logo"
									width={229}
									height={83}
								/>
							</a>
						</Link>
						<nav className={styles.navbar} class="navbar-expand-lg">
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
								aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<i class="fa fa-bars"></i>
							</button>
							<div id="navbarNavDropdown" class="navbar-collapse collapse ml-auto">
								<i class="fa fa-times" id="resMenuCloseIcon" data-toggle="collapse" data-target="#navbarNavDropdown"
									aria-controls="navbarNavDropdown" aria-expanded="true"></i>
								<ul className={styles.navbar_nav} class="mr-auto">
									<li class="nav-item" className={styles.dropdown}>
										<Link href="/">
											<a className={styles.dropdown_toggle} class="nav-link active" role="button" data-toggle="dropdown"
												aria-haspopup="true" aria-expanded="false">
												Home
                		</a>
										</Link>
										<div className={styles.dropdown_menu}>
											<a className={styles.dropdown_item} href="index.html">Home One</a>
											<a className={styles.dropdown_item} href="index-2.html">Home Two</a>
											<a className={styles.dropdown_item} href="index-3.html">Home Three</a>
										</div>
									</li>
									<li class="nav-item dropdown">
										<Link href="about">
											<a className={styles.dropdown_toggle} class="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												About
										</a>
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
				<div className={styles.footer_top} class="black-bg">
					<div class="container">
						<div class="row">
							<div class="col-lg-4 col-md-6 col-sm-12">
								<div class="cab-widget widget-image">
									<div class="cab-aside--logo">
										<a href="index.html">
											<Image
												src="/images/logo/logo-two.png"
												className={styles.logo}
												class="img-fluid"
												alt="Logo"
												width={229}
												height={83}
											/>
										</a>
									</div>
								</div>
								<div class="cab-widget widget-text">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
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
				<div className={styles.footer_bottom} class="secondary-bg">
					<div class="container">
						<p>Copyright 2021. All rights reserved</p>
					</div>
				</div>
			</footer>
		</div>
	)
}