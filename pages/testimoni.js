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
			<section class="sub-section sub-subheader">
				<div class="container">
					<div class="sub-subheader--inner">
						<h1>{testimoniTitle}</h1>
						<div class="breadcrumbs-wrapper">
							<ul class="breadcrumbs">
								<li>
									<Link href="/">
										<a><i class="fa fa-home"></i> {depanTitle}</a>
									</Link>
									<span>/</span>
								</li>
								<li> {testimoniTitle}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section class="testimonial">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-12 col-lg-8">
							<div class="section-title text-center">
								<h2>People</h2><span class="color">Reviews</span>
								<p>Our donation will help us save and improve lives with research, education and emergency care.</p>
							</div>
						</div>
					</div>
					<div class="row mt-3">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div class="inner-testimonial owl-carousel">
								<div class="text-center testimonial-data mx-auto">
									<div class="testimonial-icon text-custom">
										<i class="fa fa-quote-left" aria-hidden="true"></i>
									</div>
									<div class="mt-4">
										<div class="testimonial-img">
											<img src="images/testimonials/testimonial-pic-1.jpg" alt="client image"
												class="mx-auto img-fluid d-block img-thumbnail rounded-circle" />

										</div>
										<div class="testimonial-detail">
											<p class="client-review mt-4 text-center font-italic">"Lorem ipsum dolor sit amet, consectetur
											adipiscing elit. Sed non libero consectetur, blandit mauris eget, imperdiet nisl. Etiam commodo ex
											nec erat tempor varius. Nunc rutrum pretium nunc in malesuada. Curabitur mollis urna ac sapien
                    vulputate, ut congue sapien vehicula."</p>
											<p class="client-name text-center font-weight-bold mb-0 mt-4">John Doe</p>
											<p class="client-name position text-center mb-0 mt-1">Volunteer</p>
										</div>
									</div>
								</div>
								<div class="text-center testimonial-data mx-auto">
									<div class="testimonial-icon text-custom">
										<i class="fa fa-quote-left" aria-hidden="true"></i>
									</div>
									<div class="mt-4">
										<div class="testimonial-img">
											<img src="images/testimonials/testimonial-pic-2.jpg" alt="client image"
												class="mx-auto img-fluid d-block img-thumbnail rounded-circle" />
										</div>
										<div class="testimonial-detail">
											<p class="client-review mt-4 text-center font-italic">"Lorem ipsum dolor sit amet, consectetur
											adipiscing elit. Sed non libero consectetur, blandit mauris eget, imperdiet nisl. Etiam commodo ex
											nec erat tempor varius. Nunc rutrum pretium nunc in malesuada. Curabitur mollis urna ac sapien
                    vulputate, ut congue sapien vehicula."</p>
											<p class="client-name text-center font-weight-bold mb-0 mt-4">John Doe</p>
											<p class="client-name position text-center mb-0 mt-1">Volunteer</p>
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