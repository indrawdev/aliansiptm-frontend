import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
				<link href="assets/owl/owl.carousel.css" rel="stylesheet" />
				<script src="assets/owl/owl.carousel.min.js"></script>
			</Head>
			<section class="home" id="home">
				<div class="home-data">
					<div class="home-inner owl-carousel">
						<div class="item">
							<div class="home-image">
								<Image
									src="/images/slider/slider-1.jpg"
									alt="slider image"
									class="img-fluid"
									width={1920}
									height={964}
								/>
							</div>
							<div class="home-detail">
								<h2 class="mb-4">Help the Poor Kids</h2>
								<h1 class="home-title">Show your Heart by <span class="primary-color">Donate</span> </h1>

								<div class="home-button">
									<a href="#" class="btn btn-secondary">Get in Touch <i class="fa fa-angle-double-right"
										aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="home-image">
								<Image
									src="/images/slider/slider-2.jpg"
									alt="slider image"
									class="img-fluid"
									layout='fill'
								/>
							</div>
							<div class="home-detail">
								<h2 class="mb-4">Help the Poor Kids</h2>
								<h1 class="home-title">Show your Heart by <span class="primary-color">Donate</span> </h1>

								<div class="home-button">
									<a href="#" class="btn btn-secondary">Get in Touch <i class="fa fa-angle-double-right"
										aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="home-image">
								<Image
									src="/images/slider/slider-3.jpg"
									alt="slider image"
									class="img-fluid"
									layout='fill'
								/>
							</div>
							<div class="home-detail">
								<h2 class="mb-4">Help the Poor Kids</h2>
								<h1 class="home-title">Show your Heart by <span class="primary-color">Donate</span> </h1>

								<div class="home-button">
									<a href="#" class="btn btn-secondary">Get in Touch <i class="fa fa-angle-double-right"
										aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
