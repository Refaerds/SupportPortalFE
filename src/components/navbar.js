import React from 'react';
import Logo from '../media/logo.png';
import { connect } from 'react-redux';
import { handleRouteChange } from '../redux/page/page-actions';
import { signOut } from '../redux/user/user-actions';

const mapStateToProps = (state) => ({
    isSignedIn: state.page.isSignedIn
})

const mapDispatchToProps = (dispatch) => ({
    handleRouteChange: (route, signedIn) => dispatch(handleRouteChange(route, signedIn)),
    signOut: () => dispatch(signOut())
})

const Navbar = ({ isSignedIn, handleRouteChange, signOut }) => {
    const nav_options = isSignedIn 
        ? <div className='d-inline-block'>
            <div className="nav-item">
                <div className="nav-link btn" onClick={() => handleRouteChange('profile')}>My Profile</div>
            </div>
            <div className="nav-item">
                <div className="nav-link btn" onClick={() => {handleRouteChange('home', false); signOut()}}>Sign Out</div>
            </div>
        </div>
        : <div className='d-inline-block'>
            <div className="nav-item">
                <div className="nav-link btn" onClick={() => handleRouteChange('signin')}>Sign in</div>
            </div>
            <div className="nav-item">
                <div className="nav-link btn" onClick={() => handleRouteChange('signup')}>Sign up</div>
            </div>
        </div>

    return (
        <nav className="nav shadow sticky-top">
            <div className="navbar-brand p-1">
                <img src={Logo} alt='logo' width='70px'  role='button' onClick={() => handleRouteChange('home')}></img>
            </div>
            <div className='flex-grow-1 text-right'>
                {nav_options}
            </div>
            
        </nav>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);