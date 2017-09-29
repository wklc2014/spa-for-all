/**
 * logo
 */
import { Link } from 'dva/router';
import React from 'react';

const Logo = () => {
    return (
        <section className="LogoWraper">
            <Link to="/" className="Logo">Dva</Link>
        </section>
    );
};

export default Logo;
