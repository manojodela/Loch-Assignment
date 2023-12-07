import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import bellicon from './assets/images/bell.svg'
import notifyicon from './assets/images/notifyicon.svg'
import toggle from './assets/images/bar-chart-2.svg'
import checkbox from './assets/images/icon.svg'
import clock from './assets/images/clock.svg'
import eye from './assets/images/Eye.svg'
import footericon from './assets/images/footericon.svg'
import cohorts from './assets/images/Cohorts 1.png'
import NotificationCarousel from './NotificationCarousel';
import Testimonials from './Testimonals';
import { useState } from 'react';

const notifications = [
  <div className="card-box p-3">
    <div className="d-flex justify-content-between pb-3">
      <img src={bellicon} className="bellicon" />
      <p className="text-save">Save</p>
    </div>
    <p className="not-p pt-4">We’ll be sending notifications to you here</p>
    <input type="text" className="not-input" />
  </div>,

  <div className="card-box p-3 ">
    <div className="d-flex justify-content-between pb-3">
      <img src={toggle} className="toggleicon" />
      <img src={checkbox} className="check" />
    </div>
    <p className="not-p pt-4">Notify me when any wallets move more than</p>
    <select className="dpdwn">
      <option value="$1,000.00">$1,000.00</option>
    </select>
  </div>,

  <div className="card-box p-3">
    <div className="d-flex justify-content-between align-items-bottom pb-3">
      <img src={clock} className="toggleicon" />
      <img src={checkbox} className="check" />
    </div>
    <p className="not-p mb-1 pt-4">Notify me when any wallet dormant for</p>
    <select className="dpdwn mb-2">
      <option value="$1,000.00">&gt;30 days</option>
    </select>
    <p className="not-p">becomes active</p>
  </div>
]

const testimonals = [
  <div className='box-testi'>
    <p> <span className='fname'>JACK F </span><span className='lname'>Ex Blackrock PM</span></p>
    <p className='testi-p'>“Love how Loch integrates portfolio analytics and whale watching into one unified app.”</p>
  </div>,
  <div className='box-testi'>
    <p> <span className='fname'>YASH P </span><span className='lname'>Research, 3poch Crypto Hedge Fund</span></p>
    <p className='testi-p'>“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”</p>
  </div>,
  <div className='box-testi box-3'>
    <p> <span className='fname'>SHIV S </span><span className='lname'>Co-Founder Magik Labs</span></p>
    <p className='testi-p'>“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”</p>
  </div>
]



function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    let result = e.target.value;
    if (result.includes('@') && result.includes('.')) {
      setError('');
    }
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidEmail(email)) {
      window.location.href = 'https://app.loch.one/welcome';
    } else {
      setError('Please enter a valid email')
    }
  };

  const isValidEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-sm-12 bg-color p-3 no-pad">
            <div className='d-flex sec'>
              <div className="sec">
                <img src={notifyicon} className="icon" />
                <p className="sec-1">Get notified When a <br /> highly correlated <br /> whale makes a move </p>
                <p className="para">Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
              </div>
              <NotificationCarousel items={notifications} className="carousel" />
            </div>

            <div className='row mb'>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='text-start d-block position-relative'>
                  <img src={cohorts} className='img-fluid img' />
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='txt-center mt-5'>
                  <div className='text-eye'><img src={eye} className='eye' /></div>
                  <p className="text-eye">Watch what the whales are doing</p>
                  <p className='eye-para'>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
                </div>
              </div>
            </div>

            <div className='mb-4 mt-4'>
              <div className='text-end pe-5'>
                <p className='testi'>Testimonials</p>
              </div>
              <hr className='line mb-4' />
              <div className='row align-items-end '>
                <div className='col-lg-2 col-md-2 col-sm-12 p-0 m-0'>
                  <img src={footericon} className='footericon ms-5' />
                </div>
                <div className='col-lg-10 col-md-6 col-sm-12'>
                  <Testimonials items={testimonals} />
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className='text-center pt'>
              <p className="signup">Sign up for <br /> exclusive access.</p>
              <form onSubmit={handleSubmit}>
                <input className="input" placeholder='your email address' type="email" value={email} onChange={handleEmailChange} />
                <p className='text-center text-danger'>{error}</p>
                <br />
                <input type='submit' className='btn btn-primary mb-4' value="Get Started" />
              </form>
              <br />
              <p className='tagline'>You’ll receive an email with an invite link to join.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
