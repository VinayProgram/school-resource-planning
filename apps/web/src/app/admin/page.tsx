'use client'
import { Button } from '@mui/material'
import React from 'react'
import { SignInPage, type AuthProvider } from '@toolpad/core/SignInPage';
const providers = [{ id: 'credentials', name: 'Email and Password' }];

const Auth = () => {
  return (
    <div>
       <SignInPage
        signIn={(provider: AuthProvider, formData: FormData)=>console.log(provider)}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false } }}
      />
    </div>
  )
}

export default Auth
