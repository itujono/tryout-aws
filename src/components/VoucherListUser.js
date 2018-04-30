import React from 'react'
import VoucherItemUser from './VoucherItemUser'
import ApplyVoucher from './ApplyVoucher'
import vouchers from '../db/vouchers.json'
import {Container, Hero, Title, Level, Input, Button, Control, Field, Notification} from 'reactbulma'
import Delete from 'reactbulma/lib/components/Delete/Delete';


class VoucherListUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vouchers,
            applied: false,
            users: []
        }

        this.applyVoucher = this.applyVoucher.bind(this)
        this.hideNotification = this.hideNotification.bind(this)
    }

    
    applyVoucher(voucherInput) {
        const voucherCode = this.state.vouchers.map(voucher => voucher.code)
        if (voucherCode.includes(voucherInput)) {
            this.setState(() => ({ applied: true }))
        } else if (!voucherInput) {
            return 'Please fill up the field...'
        } else {
            return 'This is not right, I guess. Please try again...'
        }

    }

    hideNotification() {
        this.setState(() => ({ applied: false }))
    }

    render() {
        return (
            <Hero success>
                <Hero.Body>
                    <Container>
                        <Title>Know Some Vouchers?</Title>
                        <ApplyVoucher applyVoucher={this.applyVoucher} />
                        {
                            this.state.applied && (
                                <Notification info>
                                    <Delete onClick={this.hideNotification} />
                                    You've successfully applied the voucher code
                                </Notification>
                            )
                        }
                    </Container>
                </Hero.Body>
            </Hero>
        )
    }

}

export default VoucherListUser