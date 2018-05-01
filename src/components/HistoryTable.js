import React from 'react'
import { Table } from 'reactbulma/lib/components';


const HistoryTable = ({applied, historyItem, historyAmount}) => {

    return (
        <Table striped>
            <Table.Body>
                <Table.Tr>
                    <Table.Th>Voucher</Table.Th>
                    <Table.Th>Amount</Table.Th>
                    <Table.Th>Date</Table.Th>
                </Table.Tr>
                {
                    {historyItem} && (
                        <Table.Tr>
                            <Table.Td>{historyItem}</Table.Td>
                            <Table.Td>{historyAmount}</Table.Td>
                        </Table.Tr>
                    )
                }
            </Table.Body>
        </Table>
    )
}

export default HistoryTable