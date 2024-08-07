import { Box, Button, Container, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, Radio, RadioGroup, Typography } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import TextError from 'components/form-controls/TextError';

const VoucherPage: FC = () => {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.number(),
    lastName: Yup.boolean(),
    phone: Yup.string(),
    email: Yup.string(),
    address: Yup.string(),
    address2: Yup.string(),
    city: Yup.string(),
    region: Yup.string(),
    zipcode: Yup.number(),
    national: Yup.string(),
    gender: Yup.string(),
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
    national: '',
    gender: '',
  };

  const {
    control,
    watch,
    handleSubmit,
    reset,
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
  const watchRogion = watch('region');
  const watchZipcode = watch('zipcode');
  const watchNational = watch('national');
  const watchGender = watch('gender');

  const onSubmit = () => {
    setLoading(true);
    setLoading(false);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" gap={2} flexDirection="column">
          <FormGroup>
            <FormLabel disabled>Name</FormLabel>
            <Box display="flex" gap={1}>
              <InputField name="firstName" control={control} placeholder="First" />
              <InputField name="lastName" control={control} placeholder="Last" />
            </Box>
          </FormGroup>

          <FormGroup>
            <FormLabel>Phone</FormLabel>
            <InputField name="phone" control={control} placeholder="### ### ####" type="number" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Email</FormLabel>
            <InputField name="email" control={control} placeholder="email" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Address</FormLabel>
            <InputField name="address" control={control} placeholder="Street Address" />
          </FormGroup>

          <InputField name="address2" control={control} placeholder="Street Address Line 2" />

          <Box display="flex" gap={1}>
            <InputField name="city" control={control} placeholder="City" />
            <InputField name="region" control={control} placeholder="Region" />
          </Box>

          <Box display="flex" gap={1}>
            <InputField name="zipcode" control={control} placeholder="Postal / Zip Code" />
            <InputField name="region" control={control} placeholder="Region" />
          </Box>

          <Controller
            rules={{ required: true }}
            control={control}
            name="gender"
            render={({ field: transactionFeeField }: any) => (
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={transactionFeeField.value}
                onChange={(data) => transactionFeeField.onChange(data)}
                name="radio-buttons-group-transaction-fee"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            )}
          />

          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="inherit" type="submit">
              Send
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default VoucherPage;
