import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Style from '../style_module/Header.module.css';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className={Style.login_section}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default Login;
