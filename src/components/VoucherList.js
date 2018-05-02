import React from "react";
import { Table, Title, Button, Hero, Field, Container } from "reactbulma";
import VoucherItem from './VoucherItem'
import AddNewVoucher from './AddNewVoucher'
import vouchers from '../db/vouchers.json'
import Control from "reactbulma/lib/components/Control/Control";
import Input from "reactbulma/lib/components/Input/Input";

class VoucherList extends React.Component {
    constructor() {
        super()
        this.state = {
            vouchers,
            addNew: false
        }

        this.toggleAddNew = this.toggleAddNew.bind(this)
        this.deleteVoucher = this.deleteVoucher.bind(this)
        this.addNewVoucher = this.addNewVoucher.bind(this)
    }

    componentDidMount() {
        const json = localStorage.getItem('vouchers')
        const vouchers = JSON.parse(json)

        if (vouchers) this.setState(() => ({ vouchers }))
    }
    
    componentDidUpdate() {
        const json = JSON.stringify(this.state.vouchers)
        localStorage.setItem('vouchers', json)
    }

    toggleAddNew() {
        this.setState(prevState => ({ addNew: !prevState.addNew }))
    }

    deleteVoucher(voucherToRemove) {
        this.setState(prevState => ({
            vouchers: prevState.vouchers.filter(voucher => voucherToRemove !== voucher.code )
        }))
    }

    addNewVoucher(voucher) {
        this.setState(prevState => ({
            vouchers: prevState.vouchers.concat(voucher)
        }))
    }

    render() {
        return (
            <Hero success>
                <Hero.Body>
                    <Container>
                        <Title>Voucher List</Title>
                        <Button warning onClick={this.toggleAddNew} className="mb2em">{ this.state.addNew ? "Cancel" : "Add new voucher" }</Button>
                        {
                            this.state.addNew && (
                                <AddNewVoucher addNewVoucher={this.addNewVoucher} />
                            )
                        }
                        <p className="subtitle">Double click each table cell to delete</p>
                        <Table striped>
                            <Table.Body>
                                <Table.Tr>
                                    <Table.Th>Voucher</Table.Th>
                                    <Table.Th>Amount</Table.Th>
                                    <Table.Th>Users</Table.Th>
                                </Table.Tr>
                                {
                                    this.state.vouchers.map(voucher => {
                                        return  <VoucherItem
                                            key={voucher.code}
                                            code={voucher.code}
                                            amount={voucher.amount}
                                            users={voucher.users}
                                            deleteVoucher={this.deleteVoucher}
                                        />
                                    })
                                }
                            </Table.Body>
                        </Table>
                    </Container>
                </Hero.Body>
            </Hero>
        )
    }
}

export default VoucherList;
