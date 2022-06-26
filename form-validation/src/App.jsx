import {useState} from 'react';
import FormInput from './components/FormInput';
import './app.css';

function App() {
  const[values, setValues] = useState({
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmpassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'User name',
      errorMessage: 'User name should be 3-16 character and should not include any special character',
      label: 'User Name',
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should have a valid email address!',
      label: 'Email',
      required: true
    },
    {
      id: 3,
      name: 'firstname',
      type: 'text',
      placeholder: 'First name',
      errorMessage: 'First name should only have alphabets',
      pattern: "^[A-Za-z]{2,300}$",
      label: 'First Name'
    },
    {
      id: 4,
      name: 'lastname',
      type: 'text',
      placeholder: 'Last Name',
      errorMessage: 'Last name should only have alphabets',
      pattern: "^[A-Za-z]{2,300}$",
      label: 'Last Name'
    },
    {
      id: 5,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Password should be 8-20 characters and include at least 1 number, 1 letter and 1 special character',
      label: 'Password',
      pattern: "^(?=.*[0-9])(?=.*[a-zA-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true
    },
    {
      id: 6,
      name: 'confirmpassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match",
      label: 'Confirm Password',
      pattern: values.password,
      required: true
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }

  const onChange = (e) => setValues({...values, [e.target.name]: e.target.value})

console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
          {inputs.map((input) =>(
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
