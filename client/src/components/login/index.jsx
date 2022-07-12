import React, { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <div className='login'>
                Login!
            </div>
            <form className='form' onSubmit={() => console.log(username, password)}>
                <label htmlFor='username'>Username</label>
                <input type="username" name="username" value={username} onChange={e => setUsername(e)}/>

                <label htmlFor='password'>Password</label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e)}/>

                <input type="submit"/>
            </form>
        </div>
    )
}

export default Login