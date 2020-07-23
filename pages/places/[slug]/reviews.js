/*
 * Copyright (c) AzaChii and its affiliates. All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 *
 * Proprietary and confidential
 *
 * Written by Angel Mendez <hello@azachii.dev>, Jun 2020
 *
 * https://azachii.dev
 *
 * LICENSE file in the root directory of this source tree.
 */

import LayoutUnAuthenticated from "../../../components/Layouts/Unauthenticated";
import PlacePresentation from "../../../components/Places/Presentation";
import demo from '../../../demo/index.json'
import dynamic from 'next/dynamic'
import GetImageUrl from "../../../lib";
import {NextSeo} from "next-seo";

const ListReviews = dynamic(() => import('../../../components/Places/ListReviews'))
const ContactForm = dynamic(() => import('../../../components/Places/ContactForm'))

export default function Reviews() {
	return (
		<LayoutUnAuthenticated
			pixel={"689265355254424"}
			moreSpaceInFooter={true} withHeader={false}
			head={{
				theme: "#000"
			}}>
			<NextSeo
				title={"Reseñas de Moose en Waydda"}
				description={"Reseñas del servicio de Moose en Waydda"}
				facebook={{
					appId: "641527279645625"
				}}
				canonical={`https://waydda.vercel.app/places/demo`}
				additionalMetaTags={[
					{
						property: "restaurant:menu",
						content: "https://waydda.vercel.app/places/demo"
					},
					{
						property: "restaurant:contact_info:website",
						content: "https://waydda.vercel.app/places/demo"
					},
					{
						property: "restaurant:contact_info:street_address",
						content: "Av. Instituto Politécnico Nacional"
					},
					{
						property: "restaurant:contact_info:locality",
						content: "Ciudad de México"
					},
					{
						property: "restaurant:contact_info:region",
						content: "mexico"
					},
					{
						property: "restaurant:contact_info:postal_code",
						content: "00810"
					},
					{
						property: "restaurant:contact_info:country_name",
						content: "Mexico"
					}
				]}
				openGraph={{
					type: 'restaurant.restaurant',
					url: 'https://waydda.vercel.app/places/demo',
					title: "Moose en Waydda",
					description: "Menú digital de Moose en Waydda",
					site_name: "Waydda",
					images: [
						{
							url: GetImageUrl({publicId: "cover_500.png"}),
							alt: "Moose cover image",
						}
					]
				}}
			/>
			<PlacePresentation
				withSticky={false}
				data={{...demo}}
			>
				<ListReviews
					reviews={demo.reviews}
				/>
				<ContactForm/>
			</PlacePresentation>
		</LayoutUnAuthenticated>
	)
}