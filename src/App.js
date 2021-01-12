import React from 'react';
import { connect } from 'react-redux';
import Navbar from './components/nav/navbar';
import ContentBox from './components/reusable/contentbox';
import Header from './components/homepage/header';
import Faq from './components/homepage/faq';
import ContactUs from './components/homepage/contactus';
import Profile from './components/profile/profile';
import SignUp from './components/singin_signup/signup';
import SignIn from './components/singin_signup/signin';
import Alert from './components/reusable/alert';

const mapStateToProps = (state) => ({
  route: state.page.route,
  alertType: state.page.alertType
});

const App = ({ route, alertType }) => {

  return (
    <div className="App position-relative">

      <Navbar/>

      <main className='pb-10 pt-24 px-3 sm:px-8'>

        {alertType ? <Alert/> : null}

        {route === 'signup' 
          ? <SignUp/>
          : null
        }

        {route === 'signin' 
          ? <SignIn/>
          : null
        }

        {route === 'home' 
          ? <div>
            <Header/>
            <ContentBox 
              left={<ContactUs/>}
              right={<Faq/>}
            />
          </div>
          : null
        }

        {route === 'profile' 
          ? <Profile/>
          : null
        }
      </main>
    </div>
  );
}

export default connect(mapStateToProps)(App);
