import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle, depanTitle, kontakTitle } from '../components/layout'

function Kontak() {
	return (
		<Layout>
			<Head>
				<title>{kontakTitle} | {siteTitle}</title>
			</Head>
			<section className="sub-section sub-subheader header-kontak">
				<div className="container">
					<div className="sub-subheader--inner">
						<h1>{kontakTitle}</h1>
						<div className="breadcrumbs-wrapper">
							<ul className="breadcrumbs">
								<li>
									<Link href="/">
										<a><i className="fa fa-home"></i> {depanTitle}</a>
									</Link>
									<span>/</span>
								</li>
								<li> {kontakTitle}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="section-padding res-contact-map-pt contact">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
							<div className="heading text-center mb-40">
								<span className="heading__subtitle">You can contact US</span>
								<h2 className="heading__title">Contact Us</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-12 col-12">
							<div className="mapouter">
								<div className="gmap_canvas">
									<iframe width="100%" height="100%" id="gmap_canvas"
										src="https://maps.google.com/maps?q=Eiffel%20Tower&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
										frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-sm-12 col-12">
							<form id="contact-form" method="post" action="" role="form">
								<div className="messages"></div>
								<div className="controls">
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label for="form_name">Firstname *</label>
												<input id="form_name" type="text" name="name" className="form-control"
													placeholder="Please enter your firstname *" required="required"
													data-error="Firstname is required." />
												<div className="help-block with-errors"></div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label for="form_lastname">Lastname *</label>
												<input id="form_lastname" type="text" name="surname" className="form-control"
													placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
												<div className="help-block with-errors"></div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<label for="form_email">Email *</label>
												<input id="form_email" type="email" name="email" className="form-control"
													placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
												<div className="help-block with-errors"></div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label for="form_need">Please specify your need *</label>
												<select id="form_need" name="need" className="form-control" required="required"
													data-error="Please specify your need.">
													<option value=""></option>
													<option value="Request quotation">Request quotation</option>
													<option value="Request order status">Request order status</option>
													<option value="Request copy of an invoice">Request copy of an invoice</option>
													<option value="Other">Other</option>
												</select>
												<div className="help-block with-errors"></div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="form-group">
												<label for="form_message">Message *</label>
												<textarea id="form_message" name="message" className="form-control" placeholder="Message for me *"
													rows="4" required="required" data-error="Please, leave us a message."></textarea>
												<div className="help-block with-errors"></div>
											</div>
										</div>
										<div className="col-md-12">
											<input type="submit" className="btn btn-secondary btn-sm btn-send" value="Send message" />
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<p className="text-muted">
												<strong>*</strong> These fields are required.</p>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Kontak