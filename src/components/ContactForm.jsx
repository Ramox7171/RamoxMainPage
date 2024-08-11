import Input from './Input';
import { isEmail, isNotEmpty } from '../utils/validation.js';
import { useInput } from '../hooks/useInput.js';
import '../style/ContactForm.scss';
import { contactText } from '../assets/store/DATA.js';
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
    <div className='contact'>
    
      <h2>Contact</h2>
      <SocialButtons className='social-contact'/>
      
      <div className='contact-info'>
        <p>{contactText}</p>
      </div>
      <form onSubmit={handleSubmit}>
        

        <div className='control-row'>
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
            {messageHasError && <p className='control-error'>Message is required.</p>}
          </div>
        

        <p className='form-actions'>
          <button className='button'>Reset</button>
          <button
            className='button'
            type='submit'>
            Send it.
          </button>
        </p>
      </form>
    </div>
  );
}
