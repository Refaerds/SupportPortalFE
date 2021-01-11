import React from 'react';
import { connect } from 'react-redux';
import { handleProfileRouteChange } from '../../redux/page/page-actions';

const mapStateToProps = (state) => ({
    profile_route: state.page.profile_route
});

const mapDispatchToProps = (dispatch) => ({
    handleProfileRouteChange: profile_route => dispatch(handleProfileRouteChange(profile_route)),
})

const ProfileTabs = ({ handleProfileRouteChange, profile_route }) => {
    
    return (
        <div className='text-left'>
            <div className='underlined mt-4' role='button'>
                <h4 className={profile_route === 'myaccount' ? 'profiletab active' : 'profiletab'} onClick={() => handleProfileRouteChange('myaccount')}>
                    My Account
                </h4>
            </div>
            <div className='underlined mt-4' role='button'>
                <h4 className={profile_route === 'mytickets' ? 'profiletab active' : 'profiletab'} onClick={() => handleProfileRouteChange('mytickets')}>
                    My Tickets
                </h4>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTabs);