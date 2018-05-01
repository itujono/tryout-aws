import React from 'react'
import {Field, Control, Input, Button} from 'reactbulma'



class AddNewVoucher extends React.Component {

    constructor(props) {
        super(props)
        this.addNewVoucher = this.addNewVoucher.bind(this)
    }

    addNewVoucher(e) {
        e.preventDefault()

        const code = e.target.elements.code.value.trim().toUpperCase()
        const amount = e.target.elements.amount.value.trim()
        const voucher = { code, amount }

        if (voucher) {
            this.props.addNewVoucher(voucher)
            e.target.elements.code.value = ''
            e.target.elements.amount.value = ''
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.addNewVoucher}>
                <Field>
                    <Control>
                        <Input name="code" placeholder="Enter your brand new voucher code..." />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Input type="number" name="amount" placeholder="And the amount please..." />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Button info>Add voucher</Button>
                    </Control>
                </Field>
            </form>
        )
    }

}


export default AddNewVoucher

