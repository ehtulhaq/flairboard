import React from 'react'
import { Stack, getTheme } from 'office-ui-fabric-react'
import { css } from 'glamor'
import logo from '../../assets/images/logo.png'
/**
 * Window Frame global component that holds application frame
 *
 * @author [Ehtesham Ul Haq]
 */
const theme = getTheme()
const windowFrame = css({
  minHeight: 40,
  background: 'linear-gradient('+theme.palette.themeDarker+','+theme.palette.themeDarkAlt+')',
})
class WindowFrame extends React.Component {

  render() {
    return (
      <Stack verticalAlign='center' horizontalAlign='center' horizontal {...css(windowFrame)}>
        <img alt='Flair Board' src={logo} width={120} />
      </Stack>
    )
  }
}

export default WindowFrame