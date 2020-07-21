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
import Link from "next/link";
// import HamburgerMenu from 'react-hamburger-menu';


export default function UnAuthenticatedHeader({elements, isSidebarOpen, toggleSidebar}) {
	return (
		<header className="grid grid-cols-12 gap-4 px-8 bg-white py-5 items-center">
			<div className="col-span-12 md:col-span-2 text-center">
				<h2 className="font-title text-2xl font-extrabold z-20">
					<Link href="/">
						<a>Waydda <span className="block text-xs font-normal" >For Restaurants</span></a>
					</Link>
				</h2>
			</div>
			{/*<div className="col-span-4 flex justify-end block md:hidden z-20">*/}
			{/*	<HamburgerMenu*/}
			{/*		isOpen={isSidebarOpen}*/}
			{/*		menuClicked={toggleSidebar}*/}
			{/*		width={20}*/}
			{/*		height={14}*/}
			{/*	/>*/}
			{/*</div>*/}
			<div className="col-span-10 hidden md:block">
				<div className="flex justify-end">
					{elements.map((item, k) => (
						<div key={k} className="w-2/12 text-center">
							<Link href={item.href}>
								<a
									className={`text-gray-900 font-semibold ${item.featured ? "text-red-principal" : ""}`}>{item.title}</a>
							</Link>
						</div>
					))}
				</div>
			</div>
			
			{/*<div className="col-span-6 hidden md:block">*/}
			{/*	<div className="grid grid-cols-12 items-center ">*/}
			{/*		<div className="col-span-3 col-start-3 text-center">*/}
			{/*			<Link href="/sign-in">*/}
			{/*				<a className={`text-gray-900 font-semibold`}>Iniciar sesión</a>*/}
			{/*			</Link>*/}
			{/*		</div>*/}
			{/*		<div className="col-span-4">*/}
			{/*			<input type="email"*/}
			{/*			       className="border-black w-full border-2 placeholder-black px-4 py-2 focus:border-none focus:outline-none"*/}
			{/*			       placeholder="Ingresa tu correo electrónico"/>*/}
			{/*		</div>*/}
			{/*		<div className="col-span-3 h-full">*/}
			{/*			<button className="bg-black w-full h-full text-white focus:outline-none uppercase">Registrarse</button>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}
		</header>
	)
}

UnAuthenticatedHeader.propTypes = {
	elements: PropTypes.array.isRequired
}