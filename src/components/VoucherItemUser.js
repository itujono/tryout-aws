import React from 'react'
import { Card, Level, Content, Button } from 'reactbulma/lib/components';


const VoucherItemUser = ({code, amount, voucherApplied, applied}) => (
    <Level.Item className="user-voucher">
        <Card>
            <Card.Content>
                <Content>
                    <p className="titler">{applied ? "You've applied this voucher" : "Apply this voucher"}</p>
                    <code>{code}</code>
                    <br/><br/> <code>${amount}</code>
                    <div className="apply">
                        <Button
                            success
                            disabled={applied ? true : false}
                            onClick={(e) => voucherApplied(code)}
                        >Apply</Button>
                    </div>
                </Content>
            </Card.Content>
        </Card>
    </Level.Item>
)


export default VoucherItemUser