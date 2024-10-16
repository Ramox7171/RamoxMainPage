import Input from './Input';
import { isEmail, isNotEmpty } from '../utils/validation.js';
import { useInput } from '../hooks/useInput.js';
import '../style/ContactForm.scss';
import { contactText } from '../assets/store/DATA.js';
import { motion } from 'framer-motion';
import SocialButtons from './SocialButtons.jsx';
import { useRef, useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [sendingStatus, setSendingStatus] = useState('');
  const [isSending, setIsSending] = useState(false); 
  const form = useRef();

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
    reset: emailReset,
    validate: validateEmail, 
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameHasError,
    reset: nameReset,
    validate: validateName, 
  } = useInput('', (value) => isNotEmpty(value));

  const {
    value: textValue,
    handleInputChange: handleTextChange,
    handleInputBlur: handleTextBlur,
    hasError: messageHasError,
    reset: textReset,
    validate: validateMessage, 
  } = useInput('', (value) => isNotEmpty(value));

  async function handleSubmit(event) {
    event.preventDefault();

    
    const emailValid = validateEmail();
    const nameValid = validateName();
    const messageValid = validateMessage();

    
    if (!emailValid || !nameValid || !messageValid) {
      return;
    }

    setIsSending(true); 

    try {
      const response = await emailjs.sendForm(
        'service_6ftq2be',
        'template_4s05vik',
        form.current,
        { publicKey: 'tlqFnQ59eMfg9BWop' }
      );
      console.log('SUCCESS!', response);
      setSendingStatus('Email SENT SUCCESSFULLY.');
      
      handleReset();
      
    } catch (error) {
      setSendingStatus('Email NOT SENT.');
      console.log('FAILED...', error.text);
    } finally {
      setIsSending(false); 
    }
  }

  function handleReset() {
    nameReset();
    emailReset();
    textReset();
  }

  useEffect(() => {
    
    if (sendingStatus) {
      const timeout = setTimeout(() => {
        setSendingStatus(''); 
      }, 2000);

      
      return () => clearTimeout(timeout);
    }
  }, [sendingStatus]);


  return (
    <motion.div className='contact-form' initial={{ opacity: 0, x: 30 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, type: 'spring' }}>
    
      <h2>Contact</h2>
      <SocialButtons className='contact-form__social'/>
      
      <div className='contact-form__info'>
        <p>{contactText}</p>
      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className='contact-form__control-row'>
          <Input
            label='Name'
            id='name'
            type='text'
            name='user_name'
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            value={nameValue}
            error={nameHasError && 'Please input name.'}
          />
          <Input
            label='Email'
            id='email'
            type='email'
            name='user_email'
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            value={emailValue}
            error={emailHasError && 'Please enter valid email.'}
          />
          
          <textarea
            id='message'
            value={textValue}
            onChange={handleTextChange}
            onBlur={handleTextBlur}
            name='message'
          />
          {messageHasError && <p className='contact-form__control-error'>Message is required.</p>}
          {sendingStatus && <p className='contact-form__control-error'>{sendingStatus}</p>}
        </div>

        <p className='contact-form__actions'>
          <button
            className='contact-form__button'
            type='button'
            onClick={handleReset}>
            Reset
          </button>
          <button
            className='contact-form__button'
            type='submit'
            disabled={isSending} 
          >
            {isSending ? 'Sending...' : 'Send it'} 
          </button>
        </p>
      </form>
    </motion.div>
  );
}
