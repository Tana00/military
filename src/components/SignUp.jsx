import React from 'react';
import { useForm } from 'react-hook-form';
import SignUpForm from './SignUpForm';
const SignUp = ({setOpenForm, openForm}) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClose = () => {
    setOpenForm(false);
  };

  return (
    <div className='fixed inset-0 z-[999] h-screen bg-black bg-opacity-80 flex items-center justify-center'>
        <div className='bg-white p-4 w-full min-h-[90vh] md:w-1/2 lg:w-1/3 '>
            <button
                className='absolute z-40 top-0 right-0 p-4 bg-white text-slate-800 rounded-full focus:outline-none'
                onClick={handleClose}
            >
                <svg
                    className='h-6 w-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M19.78 18.36l-6.36-6.36 6.36-6.36-1.42-1.42-6.36 6.36-6.36-6.36-1.42 1.42 6.36 6.36-6.36 6.36 1.42 1.42 6.36-6.36 6.36 6.36 1.42-1.42z'
                    />
                </svg>
            </button>
            <h2 className='text-2xl font-bold text-center'>Sign Up</h2>
            <SignUpForm
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onSubmit={onSubmit}
                password={watch('password')}
            />
        </div>
    </div>
  );
};

export default SignUp;