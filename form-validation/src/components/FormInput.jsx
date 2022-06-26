import {useState} from 'react';
import './formInput.css';

const FormInput = (props) => {
  const [focus, setFocus] = useState(false)
  const {label, errorMessage, onChange, id, ...inputProps} = props;
  const handleFocus = (e) => {
    setFocus(true);
  }
  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === 'confirmpassword' && setFocus(true)}
        focused={focus.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
