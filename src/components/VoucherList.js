import React from "react";
import { Table, Title, Hero, Container } from "reactbulma";
import VoucherItem from './VoucherItem'

class VoucherList extends React.Component {
    constructor() {
        super()
        this.state = {
            vouchers: [
				{ code: "CODE1", amount: 50, users: ["Sulastri", "Kembang Asih"] },
				{ code: "CODE2", amount: 100, users: ["Gunawan"] },
				{ code: "CODE3", amount: 200, users: ["Purwanto", "Hisam Sani"] },
				{ code: "CODE4", amount: 400, users: ["Rusmanti"] },
				{ code: "CODE5", amount: 500, users: ["Halimatus"] }
            ]
        }
    }
    render() {
        return (
            <Hero success>
                <Hero.Body>
                    <Container>
                        <Title>Voucher List</Title>
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
