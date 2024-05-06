import React from 'react';
import styles from './seabackground.module.css';
import uniCardSvg from './assets/svg/uniCardSvg.svg';
import { PiStarFourFill } from 'react-icons/pi';
const App: React.FC = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover'
        style={{ zIndex: -1 }}
      >
        <source
          src='https://www.uni.cards/videos/nxt_wave_bg.mp4'
          type='video/mp4'
        />
      </video>

      <div className=' flex flex-col gap-9 relative'>
        <img
          src='https://www.uni.cards/images/nx-wave/nx_wave_hero.png'
          className=' absolute top-28 right-0 h-auto w-[225] md:w-[420px] md:h-[420px] max-w-[420px] mx-6'
        />
        <div className=' w-full flex flex-col md:flex-row justify-between items-center px-9 -mt-4'>
          <img src={uniCardSvg} alt='Uni Card' className=' w-32 h-32 mb-2' />
          <button className=' text-lg text-white bg-gray-900 bg-opacity-60 rounded-lg px-6 py-2 font-medium hover:bg-opacity-100'>
            Uni Paychek
          </button>
        </div>
        <div className='px-5 max-w-[730px] -mt-16 leading-10'>
          <span className=' font-bold text-3xl md:text-[3.4rem]'>
            NX Wave.{' '}
          </span>
          <span className=' text-3xl md:text-[3.4rem] max-w-16'>
            The next-gen credit card for those who love rewards
          </span>
        </div>
        <div className=' flex items-center gap-2 px-5'>
          <h1 className=' font-medium'>1% Cashback</h1>
          <PiStarFourFill className=' w-3 h-3' />
          <h1 className=' font-medium'>5x Rewards</h1>
          <PiStarFourFill className=' w-3 h-3' />
          <h1 className=' font-medium'>Zero Forex Markup</h1>
        </div>
        <div className=' px-5 w-full relative'>
          <input
            placeholder=' Enter Phone Number'
            className=' bg-black text-white p-4 rounded-lg w-3/12'
          />
          <button className=' absolute text-sm text-black left-[230px] top-[5px] bg-[#FDEF78] rounded-xl px-3 py-3 font-medium'>
            Apply Now
          </button>
          <div className=' flex items-center gap-1.5 mt-4'>
            <input type='checkbox' />
            <h1 className=' text-[10px] w-3/12'>
              You are agree to be contact by Uni Cards over Call, SMS, Email, or
              WhatsApp, to guideyou throughyour application
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
