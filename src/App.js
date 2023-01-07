import logo from './logo.svg';
import './App.css';
import {useForm, Controller} from 'react-hook-form';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button'
import {classNames} from 'primereact/utils';
import './FreeDemo.css';


function App() {
  const {handleSubmit, control, formState:{errors}} = useForm();
  const onSubmit = () => {

  }
  const getFormErrorMessage=(name) =>{
    return errors[name] && <small className='p-error'>{errors[name].message}</small>
  }
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{width:'40%', border:'2px solid red', padding:'20px 10px',  marginTop:'20px'}}>
          <h2>React Hook Form + Prime React</h2>
            <div style={{display:'flex', flexDirection:'column'}}>
              {console.log("errors", errors)}
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                  <div className='field'>
                  <label htmlFor='name' className={classNames({'p-error':errors.name})}>Name*</label>
                    <span className='p-float-label'>
                          <Controller name="name" control={control} rules={{required:'Name Is required'}} render={({field, fieldState})=>(
                            <InputText id={field.name} {...field}/>
                          )}/>
                      </span>
                      {getFormErrorMessage('name')}
                  </div>
                  <div className='field'>
                  <label htmlFor='email' className={classNames({'p-error':errors.name})}>Email*</label>
                    <span className='p-float-label'>
                          <Controller name="email" control={control} rules={{required:'Email Is required', pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Invalid email type. e.g. abc@email.com' }}} render={({field, fieldState})=>(
                            <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                          )}/>
                      </span>
                      {getFormErrorMessage('email')}
                  </div>
                  <br/>  
                <Button label="Submit" type="submit" className='p-button-primary'/>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App;
