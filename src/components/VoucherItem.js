import React from 'react'
import {Table, Delete} from 'reactbulma'



const VoucherItem = ({code, amount, users, deleteVoucher}) => (
    <Table.Tr className="table-row" onDoubleClick={(e) => deleteVoucher(code)}>
        <Table.Td>{code}</Table.Td>
        <Table.Td>{amount}</Table.Td>
        <Table.Td> {users} </Table.Td>
    </Table.Tr>
)


export default VoucherItem