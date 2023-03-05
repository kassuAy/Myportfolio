import React from 'react'
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid';
import {useForm, SubmitHandler} from 'react-hook-form';
type Inputs = {
  name:String;
  email:String;
  subject:String;
  message:String;

};
type Props={};

function ContactMe({}: Props) {
  const { register,
    handleSubmit ,
    }= useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData)=>{
    window.location.href= `mailto:kassuat2021@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}.
     (${formData.email})`;
  }
  return (
    <div className=' relative h-screen bg-black flex flex-col text-center md:text-left md:flex-row'>
        <h3 className='absolute  uppercase tracking-[20px] text-gray-500 text-2xl'>
          Contact Me
          </h3>
          <div className=' absolute top-24 flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'> 
              I have got just you need.{" "}
              <span className='decoration-[#F7AB0A]/50underline'>Lets Talk</span>
            </h4>
            <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
              <PhoneIcon className='text-[#F7AB0A] h-7 w-7 aniamte-pulse'/>
              <p className='text-2xl'>+251939112256</p>

            </div>
            <div className='flex items-center justify-center space-x-5'>
              <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 anomate-pulse'/>
              <p className='text-2xl'>kassuat2021@gmail.com</p>
            </div>

            <div className='flex items-center justify-center space-x-5'>
              <MapPinIcon className='text-[#F7AB0A] h-7 w-7 anomate-pulse'/>
              <p className='text-2xl'>Algeria Street 6Kilo ,Addis Ababa</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}action=''className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
              <input {...register('name')}placeholder='Name' className="contactInput" type="text" />
              <input {...register('email')}placeholder='Email'  className="contactInput" type="email" />
            </div>

            <input{...register('subject')} placeholder='subject'  className='contactInput'type="text"/>
            <textarea{...register('message')} placeholder='Message Me'  className='contactInput'/>
            <button type='submit'
            className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>submit</button>

          </form>
    </div>
  </div>
  );
}

export default ContactMe 