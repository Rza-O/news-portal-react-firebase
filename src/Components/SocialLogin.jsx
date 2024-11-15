import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Log in with</h2>
            <div className="*:w-full space-y-2">
                <button className="btn">
                    <FaGoogle /> Log in With Google
                </button>
                <button className="btn">
                    <FaGithub /> Log in with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;