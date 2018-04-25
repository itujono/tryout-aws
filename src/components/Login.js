import React from 'react'
import { Control, Field, Input, Button } from 'reactbulma/lib/components';


export default class Login extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <Field>
                    <Control>
                        <Input placeholder="Enter your username..." />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Input placeholder="And your password..." />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Button danger>Login</Button>
                    </Control>
                </Field>
            </div>
        )
    }

}