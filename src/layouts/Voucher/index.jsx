import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import CardDetailForm from "./CardDetailForm";
import { Infomation } from "./Infomation";
import { API_URL } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VoucherPage = () => {

    const navigate = useNavigate()

    const [step, setStep] = useState(0)
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Invalid first name'),
        lastName: Yup.string().required(),
        phone: Yup.string().required(),
        email: Yup.string().email(),
        address: Yup.string().required(),
        address2: Yup.string().required(),
        city: Yup.string().required(),
        region: Yup.string().required(),
        zipcode: Yup.string().required(),
        state: Yup.string().required(),
        country: Yup.string().required(),
        gender: Yup.string().required(),


        cardType: Yup.string().required(),
        cardName: Yup.string().required(),
        cardNumber: Yup.string().required(),
        expires: Yup.string().required(),
        cvc: Yup.string().required("Invalid code").min(3, 'Invalid code')
            .max(4, 'Invalid code'),
    });

    const defaultValues = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        address2: "",
        city: "",
        region: "",
        zipcode: "",
        state: "",
        gender: "",
        country: "",

        cardType: "visa",
        cardName: "",
        cardNumber: "",
        expires: "",
        cvc: "",
    };

    const {
        control,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });

    const watchFirstName = watch("firstName");
    const watchLastName = watch("lastName");
    const watchPhone = watch("phone");
    const watchEmail = watch("email");
    const watchAddress = watch("address");
    const watchAddress2 = watch("address2");
    const watchCity = watch("city");
    const watchZipcode = watch("zipcode");
    const watchState = watch("state");
    const watchGender = watch("gender");
    const watchCountry = watch("country");

    const watchCardType = watch("cardType");
    const watchCardName = watch("cardName");
    const watchCardNumber = watch("cardNumber");
    const watchExpires = watch("expires");
    const watchCvc = watch("cvc");

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
        type: watchCardType,
        cardName: watchCardName,
        cardNumber: watchCardNumber,
        expires: watchExpires,
        cvc: watchCvc,
    }

    const onSubmit = async () => {
        setLoading(true);
        await axios.post(`${API_URL}/api/payments`, {
            ...submitValueCard, ...submitValueInformation
        }, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTZmZWFhMzgwNmNlNmM4MDk0ODQ3ZiIsInNlc3Npb25JZCI6IjY2YjQ2YWVlMzVlNmM5YjE1M2IwY2VhNCIsImlhdCI6MTcyMzA5OTg4NiwiZXhwIjoxNzMxNzM5ODg2fQ.wxKhrnp1IFtyCBrICttEFZjqf_z9wZ3nAPQkGaJX9Ng`
            }
        });
        setLoading(false);
        navigate('/')
    };

    const handleSend = () => {
        setStep(1)
    }

    return (
        <>
            {step === 0 && <Infomation onSend={handleSend} disabled={Object.values(submitValueInformation).some(item => !item) || Object.keys(errors).length > 0} control={control} />}
            {step === 1 && <CardDetailForm control={control} onSubmit={onSubmit} loading={loading} />}
        </>
    );
};


export default VoucherPage