import React from 'react';
import Logo from '../../media/logo.png';
import NavItem from './nav-item';
import { connect } from 'react-redux';
import { handleRouteChange } from '../../redux/page/page-actions';

const mapStateToProps = (state) => ({
    isSignedIn: state.page.isSignedIn
})

const mapDispatchToProps = (dispatch) => ({
    handleRouteChange: (route, signedIn) => dispatch(handleRouteChange(route, signedIn)),
})

const Navbar = ({ isSignedIn, handleRouteChange }) => {
    const nav_options = isSignedIn 
        ? <div className='flex flex-no-wrap items-center'>
            <NavItem
                routeOptions={['profile']}
                text='My Profile'
            />
            <NavItem
                routeOptions={['home', false]}
                text='Sign Out'
            />
        </div>
        : <div className='flex flex-no-wrap items-center'>
            <NavItem
                routeOptions={['signin']}
                text='Sign in'
            />
            <NavItem
                routeOptions={['signup']}
                text='Sign up'
            />
        </div>

    return (
        <nav className="blur shadow-lg fixed bg-transparent w-full flex flex-no-wrap items-center justify-between">
            <div className="p-1">
                <img src={Logo} alt='logo' width='70px' role='button' onClick={() => handleRouteChange('home')}></img>
            </div>
            {nav_options}
        </nav>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);