import React from 'react';
import { Link, NavLink } from "react-router-dom";

import HeaderStyles from "./header-styles";
import appColors from '../../colors';

const Header = () => (
    <HeaderStyles primaryColor={appColors.primary}>
        <Link className="logo" to={{ pathname: '/'}}>Albus</Link>
        <NavLink activeClassName="active-link" to={{ pathname: '/campaigns'}}>Campaigns</NavLink>
        <NavLink activeClassName="active-link" to={{ pathname: '/hall-of-fame'}}>Hall of Fame</NavLink>
        <div className="header-right">
            <Link className="notifications" to={{ pathname: '/'}}>Notifications</Link>
            <Link className="user-name" to={{ pathname: '/'}}>User Name</Link>
        </div>
    </HeaderStyles>
)

export default Header;