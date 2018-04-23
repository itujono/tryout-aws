import React from 'react'
import { Container, Title, Field, Control, Label, Input, Button } from 'reactbulma'


export const AddVoucher = () => (
    <Container>
        <Title>Add New Voucher</Title>
        <Field>
            <Label>Sempardak</Label>
            <Control>
                <Input placeholder="Sempardak sungguh" />
            </Control>
            <Control>
                <Button light> Submit </Button>
            </Control>
        </Field>
    </Container>
);
