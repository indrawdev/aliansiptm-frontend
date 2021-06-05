import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout, { siteTitle, kegiatanTitle } from '../../components/layout'

function ViewKegiatan() {

	const router = useRouter()
	const { slug } = router.query

	return (
		<Layout>
			<Head>
				<title>{slug} | {kegiatanTitle} | {siteTitle}</title>
			</Head>
			<p>Post : {slug}</p>
		</Layout>
	)
}

export default ViewKegiatan