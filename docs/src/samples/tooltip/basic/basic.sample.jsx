import React from 'react'

import Panel from '../../../../../src/panel'
import withTooltip from '../../../../../src/tooltip'

const Basic = () => {
  const PanelTip = withTooltip(Panel)
  return (
    <PanelTip title="Panel with tooltip" tooltip="My tooltip">
      Vide, quantum, inquam, fallare, Torquate. oratio me istius philosophi non offendit; nam et
      complectitur verbis, quod vult, et dicit plane, quod intellegam; et tamen ego a philosopho, si
      afferat eloquentiam, non asperner, si non habeat, non admodum flagitem. re mihi non aeque
      satisfacit, et quidem locis pluribus. sed quot homines, tot sententiae; falli igitur possumus.
    </PanelTip>
  )
}

export default Basic
