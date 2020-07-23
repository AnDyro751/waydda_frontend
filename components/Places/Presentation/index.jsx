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

import PropTypes from 'prop-types'
import PlaceCover from "../Cover";
import PlaceMenu from "../../PlaceMenu";
import {useState} from "react";
import dynamic from "next/dynamic";
import PlaceHeader from "../../Headers/PlaceHeader";
import PlaceDescription from "../Description";

const WhatsAppButton = dynamic(() => import('../../WhatsAppButton'), {
	ssr: false
})

export default function PlacePresentation({children, withSticky, data: {cover, name, city, address, reviews, food, whatsapp}}) {
	const [activeItem, setActiveItem] = useState("")
	const onHandleReceive = (e) => {
		setActiveItem(e);
	}
	return (
		<div className="grid grid-cols-12 ">
			<div className="col-span-12">
				<PlaceHeader/>
			</div>
			
			<div className="col-span-12 md:mb-10">
				<PlaceCover
					name={name}
					city={city}
					reviews={reviews}
					address={address}
					image={{
						src: cover
					}}
				/>
			</div>
			{withSticky &&
			<div
				className={`col-span-12 md:hidden z-20 ${activeItem ? "shadow" : ""} bg-white ${withSticky ? "sticky top-0" : ""}`}>
				<PlaceMenu
					items={food.categories}
					handleSendItem={onHandleReceive}
				/>
			</div>
			}
		
			<div className="col-span-12 md:col-span-10 md:col-start-2">
				<div className="grid grid-cols-12 md:gap-8">
					<div className="col-span-3 hidden md:block">
						<div className="sticky top-0 z-20">
							<PlaceDescription
								reviews={reviews}
								name={name}
								address={address}
								city={city}
							/>
						</div>
					</div>
					<div className="col-span-12 md:col-span-9">
						{children}
					</div>
				</div>
			</div>
			{whatsapp &&
			<WhatsAppButton data={whatsapp}/>
			}
		</div>
	)
}

PlacePresentation.propTypes = {
	children: PropTypes.any.isRequired,
	withSticky: PropTypes.bool.isRequired
}

PlacePresentation.defaultProps = {
	withSticky: true
}