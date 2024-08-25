import Input from './Input';
import { isEmail, isNotEmpty } from '../utils/validation.js';
import { useInput } from '../hooks/useInput.js';
import '../style/ContactForm.scss';
import { contactText } from '../assets/store/DATA.js';
import { motion } from 'framer-motion';
import SocialButtons from './SocialButtons.jsx';


export default function ContactForm() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) => {
    //...
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameHasError,
  } = useInput('', (value) => {
   return isNotEmpty(value);
  });

  const { value: textValue, handleInputChange: handleTextChange, handleInputBlur:handleTextBlur, hasError:messageHasError} = useInput('',(value)=>{
   return isNotEmpty(value);
  });

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || nameHasError ||messageHasError) {
      return;
    }
    console.log(nameValue,emailValue,textValue);
    // SEND HTTP REQUEST
  }

  return (
    <motion.div className='contact-form' initial={{ opacity: 0, x: 0 }}
    animate={{ x: -30, opacity: 1 }}
    transition={{ duration: 1, type: 'spring' }}>
    
      <h2>Contact</h2>
      <SocialButtons className='contact-form__social'/>
      
      <div className='contact-form__info'>
        <p>{contactText}</p>
      </div>
      <form onSubmit={handleSubmit}>
        

        <div className='contact-form__control-row'>
          <Input
            label='Name'
            id='name'
            type='text'
            name='name'
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            value={nameValue}
            error={nameHasError && 'Please input name.'}
          />
          <Input
            label='Email'
            id='email'
            type='email'
            name='email'
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
            />
            {messageHasError && <p className='contact-form__control-error'>Message is required.</p>}
          </div>
        

        <p className='contact-form__actions'>
          <button className='contact-form__button'>Reset</button>
          <button
            className='contact-form__button'
            type='submit'>
            Send it.
          </button>
        </p>
      </form>
    </motion.div>
  );
}
