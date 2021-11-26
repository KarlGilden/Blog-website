import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert} from 'react-bootstrap'
import {
    useNavigate
  } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'
function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth()
    const [error, setError] = useState()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    async function handleSubmit(e){
        e.preventDefault()

        
            setError('')
            setLoading(true)
            const error = await login(emailRef.current.value, passwordRef.current.value)
            if(error){
                setLoading(false)
                return setError(error.message)
            }else{
                setLoading(false)
                navigate('/')
            }


    
    }

    return (
        <>
            <Card className="w-100 primary-bg primary-text login-card">
                <Card.Body>
                    <h2 className="text-center mb-4">Log in</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4 submit-btn" type="submit">Log in</Button>
                    </Form>
                </Card.Body>
            </Card>

        </>
    )
}

export default Login