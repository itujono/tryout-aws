import React from "react";
import { Table } from 'reactbulma'




const VoucherList = () => (
    <Table striped>
        <Table.Body>
            <Table.Tr>
                <Table.Th>Heading 1</Table.Th>
                <Table.Th>Heading 2</Table.Th>
            </Table.Tr>
            <Table.Tr>
                <Table.Td>Isi Pertama ya</Table.Td>
                <Table.Td>Isi Kedua ya</Table.Td>
            </Table.Tr>
            <Table.Tr>
                <Table.Td>Makan nasi ya</Table.Td>
                <Table.Td>Nasi yang beneran ya, jangan sampe salah.</Table.Td>
            </Table.Tr>
        </Table.Body>
    </Table>
);


export default VoucherList