import React from 'react'
import { Header, Transition } from 'semantic-ui-react'

import { Avocado } from '../SVGIcons'

type AnimatedHeaderProps = {
  visible: boolean
  onClick: () => void
  onComplete: () => void
}
//header donde sale la animacion aqui cambiaremos caracteristicas de el logo
const AnimatedHeader = ({
  visible,
  onClick,
  onComplete,
}: AnimatedHeaderProps) => (
  <Header size="huge" as="h1" onClick={onClick}>
    Javier
    <Transition
      animation="jiggle"
      visible={visible}
      duration={2000}
      onComplete={onComplete}
    >
      <Avocado size="58px" />
    </Transition>
    Mills
  </Header>
)

export default AnimatedHeader
