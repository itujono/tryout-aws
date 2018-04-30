import React from 'react'
import { Field, Control, Input, Button, Notification, Delete } from 'reactbulma'


class ApplyVoucher extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: undefined
        }

        this.applyVoucher = this.applyVoucher.bind(this)
        this.hideNotification = this.hideNotification.bind(this)
    }

    applyVoucher(e) {
        e.preventDefault();
        const voucherInput = e.target.elements.voucher.value.trim().toUpperCase()
        const error = this.props.applyVoucher(voucherInput)

        this.setState(() => ({ error }))

        if (voucherInput) {
            e.target.elements.voucher.value = ''
        }
    }

    hideNotification() {
        this.setState(() => ({ error: undefined }))
    }

    render() {
        return (
            <form className="form" onSubmit={this.applyVoucher}>
                <Field>
                    <Control>
                        <Input name="voucher" placeholder="Apply your voucher code here..." />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Button warning>Apply</Button>
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

export default ApplyVoucher