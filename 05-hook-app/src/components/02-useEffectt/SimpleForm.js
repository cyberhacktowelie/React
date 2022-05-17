import React, {useEffect, useState} from 'react'
import { Message } from './Message.js'
import './effects.css'

export const SimpleForm = () => {

    const [ formState , setFormState ] = useState({
        name: '',
        mail: ''
    })
// eslint-disable-next-line
    const { name, mail } = formState;

    useEffect(() => {
        // console.log('useEffect');
    }, []);

    useEffect(() => {
        // console.log('formState cambioado');
    }, [formState]);

    useEffect(() => {
        // console.log('mail cambioado');
    }, [mail]);

    const handleInputChange = ({target}) => {
        // const { name, value } = event.target;
       setFormState({
              ...formState,
                [target.name]: target.value
         });
    }


  return (
    <>
        <h1>Simple Form: useEffect</h1>
        <hr/>
        <div className="form-group">
            <form>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    className="form-control mt-2"
                    type="text"
                    name="mail"
                    placeholder="Mail"
                    autoComplete="off"
                    value={mail}
                    onChange={handleInputChange}
                    // onChange={(e) => handleInputChange(e.target.value)}
                />
                <hr/>
                <button type="submit">Submit</button>
            </form>
        </div>


        {/* { name && <Message /> }
         */}
         { (name === '123') && <Message /> }
    </>
  )
}
