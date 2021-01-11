import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'bootstrap';
import Navbar from './components/navbar';
import ContentBox from './components/reusable/contentbox';
import Header from './components/homepage/header';
import Faq from './components/homepage/faq';
import ContactUs from './components/homepage/contactus';
import Footer from './components/footer';
import Profile from './components/profile/profile';
import SignUp from './components/singin_signup/signup';
import SignIn from './components/singin_signup/signin';
import Alert from './components/reusable/alert';


const mapStateToProps = (state) => ({
  route: state.page.route
});

const App = ({ route }) => {

  useEffect(() => {
    document.title = 'Avelraan Support'
  }, [])

  return (
    <div className="App position-relative">

      <Navbar/>

      <div className='main'>

        <Alert/>

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
      </div>
      
      <Footer/>

    </div>
  );
}

export default connect(mapStateToProps)(App);
