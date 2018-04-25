import React from 'react'
import { Container, Title, Field, Control, Input, Hero, Button } from 'reactbulma'


const AddVoucher = () => (
    <Hero success>
        <Hero.Body>
            <Container>
                <Title>Add New Voucher</Title>
                <Field>
                    <Control>
                        <Input placeholder="Type your brand new voucher code here..." />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Button danger>Add now</Button>
                    </Control>
                </Field>
            </Container>
        </Hero.Body>
    </Hero>
);


export default AddVoucher