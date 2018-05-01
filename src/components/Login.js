import React from 'react'
import users from '../db/users.json'
import { Control, Field, Input, Button, Notification, Delete } from 'reactbulma/lib/components';


export default class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            error: undefined
        }

        this.handleLogin = this.handleLogin.bind(this)
        this.hideNotification = this.hideNotification.bind(this)
    }

    handleLogin(e) {
        e.preventDefault()
        const username1 = e.target.elements.username.value.trim()
        const password2 = e.target.elements.password.value.trim()

        const error = this.props.handleLogin(username1, password2)

        this.setState(() => ({ error }))
    }

    hideNotification() {
        this.setState(() => ({ error: undefined }))
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
                { this.state.error && (
                        <Notification danger>
                            <Delete onClick={this.hideNotification} />
                            {this.state.error}
                        </Notification>
                    )
                }
            </form>
        )
    }

}