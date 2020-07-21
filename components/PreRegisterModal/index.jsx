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
import Modal from 'react-modal';
import {useEffect, useState} from "react";
import SimpleInput from "../Input";
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai'
import states from '../../lib/states.json'
import ResponsiveImage from "../ResponsiveImage";

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		border: "none",
		backgroundColor: "white",
		maxHeight: "100%"
	}
};
export default function PreRegisterModal({isOpen, handleClose, defaultEmail}) {
	
	const [modalIsOpen, setModalIsOpen] = useState(isOpen);
	const [success, setSuccess] = useState(false);
	
	
	useEffect(() => {
		setModalIsOpen(isOpen);
	}, [isOpen])
	useEffect(() => {
		setFields({...fields, email: defaultEmail})
	}, [defaultEmail])
	
	const [fields, setFields] = useState({
		name: "",
		email: defaultEmail,
		place_name: "",
		place_address: "",
		place_coords: [],
		city: "",
		state: ""
	})
	
	const handleClick = () => {
		setSuccess(true);
	}
	
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={() => {
				setSuccess(false);
				setFields({
					name: "",
					email: defaultEmail,
					place_name: "",
					place_address: "",
					place_coords: [],
					city: "",
					state: ""
				})
				setModalIsOpen(false);
				handleClose()
			}}
			style={{
				...customStyles, overlay: {
					backgroundColor: "rgba(0,0,0,0.5)"
				}
			}}
			// overlayClassName={"bg-red-400"}
			// className={"relative bg-red-100 absolute"}
			contentLabel="Pre register form"
		>
			<div
				className="grid grid-cols-12 py-4 md:py-8">
				{success ?
					<>
						<div className="col-span-12 text-center">
							<h2 className="text-2xl md:text-3xl mb-2 font-bold uppercase">¡Tu lugar se ha apartado!</h2>
							<ResponsiveImage
								wrapperClass="mt-4"
								className="h-24"
								height={500}
								publicId={"kingdom-1.png"}
							/>
							<h4 className="text-sm text-gray-700 mt-2">Pronto recibirás noticias sobre Waydda en tu correo</h4>
						</div>
						<div className="col-span-12 mt-4">
							<div className="grid grid-cols-3">
								<div className="col-span-3 text-center mb-5">
									<h4 className="text-lg font-bold">¡Comparte con tus amigos!</h4>
								</div>
								<div className="col-span-1 text-center flex justify-center mt-3">
									<a href="https://www.facebook.com/sharer/sharer.php?u=https://waydda.azachii.dev" target="_blank"
									className="px-3"
									>
										<AiFillFacebook size={35}/>
									</a>
								</div>
								<div className="col-span-1 text-center flex justify-center mt-3">
									<a href="https://twitter.com/home?status=https://waydda.azachii.dev He apartado mi lugar en Waydda!"
									   target="_blank"
									className="px-3"
									>
										<AiOutlineTwitter size={35}/>
									</a>
								</div>
								<div className="col-span-1 text-center flex justify-center mt-3">
									<a href="https://wa.me/?text=https://waydda.azachii.dev He apartado mi lugar en Waydda!"
									   target="_blank"
									className="px-3"
									>
										<IoLogoWhatsapp size={35}/>
									</a>
								</div>
							</div>
							
							{/*<FaWha*/}
						</div>
					</>
					:
					<>
						<div className="col-span-12 mb-6 text-center">
							<h2 className="text-2xl md:text-3xl mb-2 font-bold uppercase">Reserva tu lugar ahora</h2>
							<p className="text-sm text-red-principal font-bold">Acceso gratuito a las primeras 300 personas</p>
						</div>
						<div className="col-span-12">
							<SimpleInput
								handleChange={(e) => {
									setFields({...fields, name: e.target.value})
								}}
								label={"Tu nombre"}
								placeholder={"Armando Pérez"}
								minLength={10}
								maxLength={50}
							/>
							<SimpleInput
								handleChange={(e) => {
									setFields({...fields, name: e.target.value})
								}}
								label={"Correo Electrónico"}
								placeholder={"armandoperez@gmail.com"}
								minLength={10}
								maxLength={50}
								value={fields.email}
								type={"email"}
							/>
							<SimpleInput
								handleChange={(e) => {
									setFields({...fields, name: e.target.value})
								}}
								label={"Nombre de tu restaurante"}
								placeholder={"Tacos los primos"}
								minLength={10}
								maxLength={50}
								type={"email"}
							/>
							<div className="grid grid-cols-1">
								<div className="col-span-1 mb-2">
									<label className="text-xs text-gray-600 uppercase font-bold">Estado</label>
								</div>
								<div className="col-span-1">
									<select
										placeholder={"selecciona un estado"}
										className="rounded px-3 py-4 font-bold border-black text-lg border-2 w-full bg-white">
										<option value={""}>Selecciona un estado</option>
										{states.map((state) => (
											<option className="capitalize" value={state.clave}>{state.nombre}</option>
										))}
									</select>
								</div>
							</div>
						</div>
						<div className="col-span-12 mt-6 text-center">
							<button
								onClick={handleClick}
								className="bg-black mb-4 w-full py-4 text-white font-bold rounded shadow-2xl">Rerservar mi lugar
							</button>
							<span
								onClick={handleClose}
								className="text-xs">Cerrar</span>
						</div>
					</>
				}
			</div>
		</Modal>
	)
}

const ItemState = ({}) => (
	<div className="p-2 border-b"><span>Jpa</span></div>
)

PreRegisterModal.propTypes = {
	defaultEmail: PropTypes.string,
	handleClose: PropTypes.func,
	isOpen: PropTypes.bool
}

PreRegisterModal.defaultProps = {
	defaultEmail: ""
}