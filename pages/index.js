import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section class="home" id="home">
				<div class="home-data">
					<div class="home-inner owl-carousel">
						<div class="item">
							<div class="home-image">
								<img src="images/slider/slider-1.jpg" alt="slider image" class="img-fluid" />
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
