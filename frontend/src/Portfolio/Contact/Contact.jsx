import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <>
            <div className='contact text-center text-white' id='contact'>
                <br />
                <h1>CONTACT</h1>
                <hr />
                <div className="mx-md-auto text-center container justify-content-center">
                    <form className='from-group mt-2'>
                        <div className="form-group mt-2">
                            <label>User Name</label>
                            <input type='text' className='form-control' id="name" placeholder='Enter User Name' />
                        </div>
                        <div className="form-group mt-2">
                            <label>Email</label>
                            <input type='email' className='form-control' id="email" placeholder='Enter User Email' />
                        </div>
                        <div className="form-group mt-2">
                            <label>Message</label>
                            <textarea className='form-control' id="msg" placeholder='Message' cols={30} rows={10} />
                        </div>
                        <button type='button' className='btn my-3'>Message Me</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Contact