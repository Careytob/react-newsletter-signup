import React, { useState } from 'react';

function SignUp({ onSubmit }) {
  const [formData, setFormData] = useState({
    emailAddress: '',
  });
  const [error, setError] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const formValidation = () => {
    let validationError = {};
    if (!formData.emailAddress) {
      validationError.emailAddress = 'Valid email required';
    } else if (!validateEmail(formData.emailAddress)) {
      validationError.emailAddress = 'Invalid email format';
    }
    setError(validationError);
    return Object.keys(validationError).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValidation()) {
      onSubmit(formData.emailAddress);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError({});
  };

  return (
    <>
      <main className='text-base sm:m-20 bg-white sm:rounded-3xl lg:m-50 xl:m-60'>
        <div className='sm:flex sm:flex-row justify-center gap-10 lg:gap-16 sm:p-4'>
          <div className='sm:hidden'>
            <img src='src/assets/illustration-sign-up-mobile.svg' className='w-full' />
          </div>

          <div className='mt-5 pl-10 lg:mt-16'>
            <h1 className='text-[37px] sm:text-[53px] lg:text-[53px] xl:text-[60px] font-bold pb-5'>
              Stay updated!
            </h1>
            <p className='mt-5 lg:text-base'>
              Join 60,000+ product managers receiving monthly{' '}
              <span className='lg:block'>updates on:</span>{' '}
            </p>

            <div className='mt-5 flex flex-col gap-5'>
              <div className='flex items-start'>
                <img src='src/assets/icon-list.svg' className='mr-4' />
                <span className='lg:pl-5'>Product discovery and building what matters</span>
              </div>
              <div className='flex items-start'>
                <img src='src/assets/icon-list.svg' className='mr-4' />
                <span className='lg:pl-5'>Measuring to ensure updates are a success</span>
              </div>
              <div className='flex items-start'>
                <img src='src/assets/icon-list.svg' className='mr-4' />
                <span className='lg:pl-5'> And much more!</span>
              </div>
            </div>
            <div className='mt-10'>
              <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='flex'>
                  <label htmlFor='emailAddress'>Email Address</label>
                {error.emailAddress && (
                  <span
                    className='text-red-500 ml-[59px] sm:ml-[122px] lg:ml-[180px]'
                    id='emailAddress'
                    role='alert'
                    aria-live='assertive'
                    
                  >
                    {error.emailAddress}
                  </span>
                )}
                </div>
                <input
                  type='text'
                  name='emailAddress'
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder='email@company.com'
                  className={`mt-3 mr-9 sm:mr-0 cursor-pointer rounded py-3 lg:w-[420px] ${error.emailAddress ? 'bg-red-100 border border-red-500' : ''}`}
                />
                <button className='bg-darkslategrey text-white mt-7 mr-9 sm:mr-0 py-3 cursor-pointer rounded mb-10 lg:w-[420px] hover:bg-tomato'>
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </div>

          <div className='hidden sm:block'>
            <img src='src/assets/illustration-sign-up-desktop.svg' className='sm:rounded-none' />
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp;
