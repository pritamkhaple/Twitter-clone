import React from 'react'

export default function Login() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <div className='flex items-center'>
            <div>
                <img src='https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=740&t=st=1715345345~exp=1715345945~hmac=691454d70da95bcec6d69886b756eed7b95dbb0b306882d650c95f62a2cdc369' width={"60px"}></img>
            </div>
            <div>
            <h1 className=''>Login</h1>
                <form className='flex flex-col'>
                    <input type='text' placeholder='Name'></input>
                    <input type='text' placeholder='Username'></input>
                    <input type='text' placeholder='Email'></input>
                    <input type='text' placeholder='Password'></input>
                </form>
            </div>
        </div>
    </div>
  )
}
