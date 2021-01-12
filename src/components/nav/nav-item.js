import React from 'react';
import { connect } from 'react-redux';
import { handleRouteChange } from '../../redux/page/page-actions';
import { signOut } from '../../redux/user/user-actions';

const mapDispatchToProps = (dispatch) => ({
    handleRouteChange: (route, signedIn) => dispatch(handleRouteChange(route, signedIn)),
    signOut: () => dispatch(signOut())
})

const NavItem = ({ routeOptions, text, handleRouteChange, signOut }) => {
    const onNavItemClick = () => {
        handleRouteChange(...routeOptions);

        if (routeOptions[1] === false) {
            signOut();
        }
    }

    return (
        <div className='px-3 h-full font-medium text-custom-500 cursor-pointer hover:text-gray-200' onClick={onNavItemClick}>
            {text}
        </div>
    )
}

export default connect(null, mapDispatchToProps)(NavItem);