import { useState, useEffect } from "react";
import "./style.css";

function Login() {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateInput(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validateInput = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Please enter your email!";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email!";
    }
    if (!values.password) {
      errors.password = "Please enter your password!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 6 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="Form">
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input className="form-control" type="text" name="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
            </div>
            <p>{formErrors.email}</p>
            <div className="field"> 
            <label>Password</label>
            <input className="form-control" type="password" name="password" placeholder="Password" value={formValues.password} onChange={handleChange} />
            </div>
            <p>{formErrors.password}</p>
            <button className="btn btn-danger">Submit</button>
            </div>
      </form>
    </div>
  );
}

export default Login;
          
            
            
            
              
              
              
              
              
            
          
          
          
