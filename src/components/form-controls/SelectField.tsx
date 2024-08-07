import { MenuItem, FormControl, InputLabel, Select, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import TextError from './TextError';

function SelectField({ name, label, control, selectData, isCustomData, disabled = false, onChange }: any) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, formState }: any) => {
        const { errors } = formState;
        return (
          <FormControl fullWidth variant="outlined" error={errors[name] ? true : false}>
            <InputLabel id="input_designationselected" style={{ backgroundColor: 'white', paddingLeft: '8px', paddingRight: '8px' }}>
              {label}
            </InputLabel>
            <Select
              value={field.value}
              onChange={(e) => {
                if (onChange) return onChange({ e, field });
                field.onChange(e);
              }}
              disabled={disabled}
            >
              {isCustomData
                ? selectData.map((item: any, index: number) => (
                    <MenuItem key={index} value={item._selectKey}>
                      {item._selectName}
                    </MenuItem>
                  ))
                : selectData.map((item: any, index: number) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
            </Select>
            <TextError>{errors[name] && errors[name].type === 'required' && <FormHelperText>This field cannot be blank.</FormHelperText>}</TextError>
          </FormControl>
        );
      }}
    />
  );
}

export default SelectField;
