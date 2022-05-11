import React, { useState } from 'react';

const Login = () => {
    const [colorValue, setColorValue] = useState('size');

    const changeStyle = () => {
        console.log("you just clicked");
        setColorValue("cmpny_size");
      };

      const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
      };
  return (
    <>
        <div className='login_container'>
            <img className='logo' src='https://wobot.ai/_next/image?url=%2Fwobot_logo_blue.svg&w=1920&q=75' alt='/' />
            <p className='heading'>It's a delight to have you onboard</p>
            <p className='subtitle'>Help us know you better.</p>
            <p className='subtitle_extra'>(This is how we optimize Wobot as per your business needs)</p>

            <form onSubmit={onSubmit} className='from_login'>
                <div className='border_part'>
                    <label className='label'>Company Name</label>
                    <input className='input_box' type='text' placeholder='e.g. Example Inc' />
                </div>
                <div className='border_part'>
                    <label className='label'>Industry</label>
                    <select className='select_box'>
                        <option style={{color:'gray'}} selected disabled>Select</option>
                        <option value="grapefruit">IT Industry</option>
                        <option value="lime">Pharma</option>
                        <option value="coconut">Digital Marketing</option>
                        <option value="mango">Electronic</option>
                    </select>
                </div>
                <div className='border_part'>
                    <label className='label'>Company size</label>
                    <div className='colorValue'>
                        <button onClick={changeStyle} className='size'>1-20</button>
                        <button className='size'>21-50</button>
                        <button className='size'>51-200</button>
                        <button className='size'>201-500</button>
                        <button className='size'>500+</button>
                    </div>
                </div>
                <button className='button' type='submit'>Get Started</button>
            </form>
        </div>
        <footer>
            Terms of use | Privacy Policy
        </footer>
    </>
  )
}

export default Login