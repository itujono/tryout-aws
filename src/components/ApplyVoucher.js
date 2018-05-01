import React from 'react'
import { Field, Control, Input, Button, Notification, Delete } from 'reactbulma'
import HistoryTable from './HistoryTable';


class ApplyVoucher extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: undefined,
            historyTable: false
        }

        this.applyVoucher = this.applyVoucher.bind(this)
        this.hideNotification = this.hideNotification.bind(this)
        this.showHistoryTable = this.showHistoryTable.bind(this)
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

    showHistoryTable() {
        this.setState(prevState => ({ historyTable: !prevState.historyTable }))
    }

    render() {

        return (
            <div>
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
                <Field>
                    <Control>
                        <Button outlined onClick={this.showHistoryTable}>{this.state.historyTable ? "Hide history" : "Show history"}</Button>
                    </Control>
                </Field>
                {
                    this.state.historyTable && (
                        <HistoryTable
                            code={this.props.code}
                            amount={this.props.amount}
                            applied={this.props.applied}
                            historyItem={this.props.historyItem}
                            historyAmount={this.props.historyAmount}
                        />
                    )
                }
            </div>
        )
    }


}

export default ApplyVoucher