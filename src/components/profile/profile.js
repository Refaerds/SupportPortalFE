import React from 'react';
import { connect } from 'react-redux';
import ContentBox from '../reusable/contentbox';
import ProfileTabs from './profile_tabs';
import MyTickets from './myTickets';
import MyAccount from './myAccount';

const mapStateToProps = (state) => ({
    profile_route: state.page.profile_route
});

const Profile = ({ profile_route }) => {
    let ProfileSections;
    if (profile_route === 'myaccount') {
        ProfileSections = <MyAccount/>;
    }
    else if (profile_route === 'mytickets') {
        ProfileSections = <MyTickets/>;
    }

    return (
        <ContentBox
            left={<ProfileTabs/>}
            right={ProfileSections}
        />
    )
}

export default connect(mapStateToProps)(Profile);