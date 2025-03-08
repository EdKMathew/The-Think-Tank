import React, { useState } from 'react';
import '../styles/loginButton.css';
import LoginModal from './LoginModal';

function LoginButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="login-button" onClick={() => setShowModal(true)}>
                Login
            </button>
            {showModal && <LoginModal onClose={() => setShowModal(false)} />}
        </>
    );
}

export default LoginButton;
