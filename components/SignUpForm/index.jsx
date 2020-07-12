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

import Link from "next/link";

export default function SignUpForm() {
	return (
		<div className="grid grid-cols-12 my-8 md:my-12">
			<div className="col-span-12 mb-12 md:text-center">
				<h1 className="text-2xl font-bold font-title">¡Registrarse es gratis!</h1>
			</div>
			<div className="col-span-12">
				<Input placeholder="Jonh Doe" type={"text"} label={"Nombre completo"}/>
				<Input placeholder="jonhdoe@empresa.com" type={"email"} label={"Correo electrónico"}/>
				<Input placeholder="******" type={"password"} label={"Contraseña"}/>
				<div className="col-span-12">
					<button
						disabled={true}
						className="cursor-not-allowed bg-black md:w-auto w-full text-white text-white font-bold py-4 rounded mt-5 shadow-2xl px-5">
						REGISTRARSE
					</button>
				</div>
				<div className="col-span-12 mt-8">
					<Link href={"/sign-in"}>
						<a>¿Ya tienes cuenta? <span className="font-bold">&#160;Inicia sesión</span></a>
					</Link>
				</div>
			</div>
		</div>
	)
}

const Input = ({label, placeholder, type}) => (
	<div className="grid grid-cols-12 mb-6">
		<div className="col-span-12 mb-4">
			<label className="text-xs font-bold text-gray-800 uppercase">{label}</label>
		</div>
		<div className="col-span-12">
			<input type={type} className="border-black border-2 w-full placeholder-black px-4 py-3"
			       placeholder={placeholder}/>
		</div>
	</div>
)