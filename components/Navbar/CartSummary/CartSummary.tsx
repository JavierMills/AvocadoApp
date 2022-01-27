import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
//esta card saldra cuando se hallan agreagado cosas al carrito
type CartSummaryProps = {
  totalAmount: number
}

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (
    <Segment clearing size="large" as="section">
      <span>
        <strong>Sub total:</strong>
        {` ${totalAmount}`}
      </span>
      <Button color="yellow" floated="right">
        Agregado
      </Button>
    </Segment>
  )
}

export default CartSummary
