import React from 'react'
import users from '../db/users.json'
import { Control, Field, Input, Button } from 'reactbulma/lib/components';


export default class Login extends React.Component {

    constructor(props) {
        super(props)

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(e) {
        e.preventDefault()
        const username1 = e.target.elements.username.value.trim()
        const password2 = e.target.elements.password.value.trim()

        if (this.props.username.includes(username1) && this.props.password.includes(password2)) {
            this.props.handleLogin(username1, password2)
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleLogin}>
                <Field>
                    <Control>
                        <Input name="username" placeholder="Enter your username..." />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Input name="password" placeholder="And your password..." />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Button warning>Login</Button>
                    </Control>
                </Field>
            </form>
        )
    }

}