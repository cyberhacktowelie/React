import { useForm } from '../hooks/useForm';
import { useEffect } from 'react';

import './effects.css'

export const FormWithCustomHook = () => {

    const [ formValues , handleInputChange ] = useForm({
        name: '',
        mail: '',
        password: ''
    })

    const { name, mail, password } = formValues;

    useEffect(() => {
        console.log('mail cambioado');
    }, [ mail ]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    }


  return (
    <>
        <h1>FormWithCustomHook</h1>
        <hr/>
        <div className="form-group">
            <form onSubmit={handleSubmit}>
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
                />
                 <input
                    className="form-control mt-2"
                    type="password"
                    name="password"
                    placeholder="********"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
                <hr/>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    </>
  )
}
