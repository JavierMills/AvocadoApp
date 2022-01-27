import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

import { PosMeMuero } from '../SVGIcons'
//card animada que saldra una vez que allamos oprimido 4 veces el logo del aguacate
const ModalHeaderContent = () => {
  return (
    <div className="container">
      <Grid columns={2}>
        {/* <Grid.Row verticalAlign={'middle'}> */}
        
        <Grid.Row verticalAlign={'middle'}> 
          <Grid.Column width="5">
            <PosMeMuero size="154px" />
          </Grid.Column>
          <Grid.Column width="11">
            <Header as="h2">Mataste el aguacate!!!</Header>
            <p>Lo mataste ya que tocaste muchas veces :(</p>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <style jsx>{`
        .container {
          padding: 2rem;
          background: yellow;
        }
      `}</style>
    </div>
  )
}

export default ModalHeaderContent
