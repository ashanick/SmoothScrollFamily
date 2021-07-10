import React from 'react'
import {Container, FormWrap, Icon, FormContent,
    Form, FormH1, FormLabel, FormInput, FormButton, Text} from './SignInElements'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign nto your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required></FormInput>
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required></FormInput>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
            
        </Container>
        </>
    )
}

export default SignIn
