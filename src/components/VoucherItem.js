import React from 'react'
import {Table} from 'reactbulma'



const VoucherItem = ({code, amount, users}) => (
    <Table.Tr>
        <Table.Td>{code}</Table.Td>
        <Table.Td>{amount}</Table.Td>
        <Table.Td>
            { users.map(user => <p>{user}</p>) }
        </Table.Td>
    </Table.Tr>
)


export default VoucherItem