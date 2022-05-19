import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, InputPassword } from '../components';
import { SIGN_IN } from '../constants';
const SignUpContainer = () => {
    const [user, setuser] = useState({
        firstname: '',
        email: '',
        password: '',
    })
    const [type, setType] = useState({
        type: 'password',
        show: 'SHOW'
    })
    const isValid = user.email === ''|| user.password === '' || user.firstname ===''
    const handleOnClick = () => {
        type.type === 'password' ? setType({type: 'text', show: 'HIDE'}) : setType({type: 'password', show: 'SHOW'})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Fire base work here
    }
   return (
      <Form>
         <Form.Title>Sign Up</Form.Title>
         <Form.Frame onSubmit={handleSubmit}>
            <Form.Wrapper>
               <Form.Input value={user.firstname} type='text' onChange={({target})=> setuser({...user, firstname: target.value}) } />
               <Form.Label isValid={user.firstname}>First Name</Form.Label>
            </Form.Wrapper>
            <Form.Wrapper>
               <Form.Input value={user.email} type='text' onChange={({target}) => setuser({...user, email: target.value})} />
               <Form.Label isValid={user.email}>Email address</Form.Label>
            </Form.Wrapper>
            <Form.Wrapper>
               <InputPassword type={type.type} value={user.password} onChange={({target})=> setuser({...user, password: target.value})} />
               <Form.Option onClick={handleOnClick}>{user.password && type.show}</Form.Option>
               <Form.Label isValid={user.password}>Password</Form.Label>
            </Form.Wrapper>
            <Form.Submit type='submit' disabled={isValid}>Sign Up</Form.Submit>
         </Form.Frame>
         <Form.Text>
            Already a user?
            <Form.Link to={SIGN_IN}> Sign in now. </Form.Link>
         </Form.Text>
         <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
         </Form.TextSmall>
      </Form>
   );
};

export default SignUpContainer;
