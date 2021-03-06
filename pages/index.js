import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle, depanTitle } from '../components/layout'

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle} - Aliansi Pencegahan dan Pengendalian Penyakit Tidak Menular</title>
			</Head>
			<section className="sub-section sub-subheader header-depan">
				<div className="container">
					<div className="sub-subheader--inner">
						<h1>Cegah PTM dengan Pola Hidup Sehat</h1>
						<br />
					</div>
				</div>
			</section>
		</Layout>
	)
}
