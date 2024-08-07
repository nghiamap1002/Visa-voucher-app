/* eslint-disable react/prop-types */
import ClearIcon from '@mui/icons-material/Clear';
import { InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: '100%',
  },
  iconButton: {
    cursor: 'pointer',
    '&__icon': {
      color: 'rgb(99, 115, 129)',
    },
  },
}));

function InputField({
  type = 'text',
  disabled = false,
  name,
  label,
  control,
  placeholder,
  defaultValue,
  isPasscodeField,
  onChange,
  onInput,
  labelDisabled,
  clearable,
  inputProps = {},
  InputProps = {},
  ...other
}: any) {
  const classes: any = useStyles();
  const renderEndAdornment = (field: any) =>
    clearable && field.value ? (
      <InputAdornment
        position="end"
        sx={{
          backgroundColor: (theme) => '#ECF4FD',
          padding: '27.5px 19px',
          '& .MuiInputAdornment-root': {
            marginLeft: 0,
          },
          cursor: 'pointer',
        }}
        onClick={(e) => {
          if (clearable && field.value) {
            field.onChange('');
          }
        }}
      >
        <ClearIcon className={`${classes.iconButton}__icon`} />
      </InputAdornment>
    ) : (
      InputProps.endAdornment
    );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState }: any) => {
        const { errors } = formState;
        return (
          <TextField
            {...other}
            value={field.value}
            fullWidth
            disabled={disabled}
            variant="outlined"
            InputLabelProps={{ shrink: labelDisabled ? false : true }}
            type={type}
            label={labelDisabled ? null : label}
            placeholder={placeholder}
            InputProps={{
              endAdornment: renderEndAdornment(field),
              ...InputProps,
            }}
            inputProps={{
              pattern: type === 'number' ? '[0-9]*' : '*',
              ...inputProps,
            }}
            onInput={(e: any) => {
              if (onInput) return onInput(e);
              e.target.value = type === 'number' ? Math.max(0, parseInt(e.target.value)).toString().slice(0, 10) : e.target.value;
            }}
            onChange={(e) => {
              if (onChange) return onChange({ e, field });
              if (type === 'number') {
                if (e) {
                  const data = Number(e.target.value);
                  const result = Math.abs(data);
                  field.onChange(result.toString());
                }
              } else if (isPasscodeField) {
                const result = e.target.value.replace(/[^0-9\.]+/g, '');
                if (result.length <= 4) {
                  field.onChange(result);
                }
              } else {
                field.onChange(e);
              }
            }}
            error={Boolean(errors[name])}
            helperText={Boolean(errors[name]) && errors[name].message}
          />
        );
      }}
    />
  );
}

export default InputField;
