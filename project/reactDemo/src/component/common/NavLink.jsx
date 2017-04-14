import React from 'react';
import { Link, IndexLink } from 'react-router';

const NavLink = props => {
    const {isHome} = props;
    const otherProps = {
        activeClassName: 'navActive',
        className: 'navClass',
        ...props
    };
    delete otherProps.isHome;

    if (isHome) {
        return <IndexLink {...otherProps} />;
    }
    return <Link {...otherProps} />;
}

export default NavLink;
