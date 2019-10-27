import React from 'react'
import { Stack, getTheme, TextField } from 'office-ui-fabric-react'
import { css } from 'glamor'
/**
 * Navigation component that sticks on the top with all navigation links
 *
 * @author [Ehtesham Ul Haq]
 */
const theme = getTheme()
const windowFrame = css({
  minHeight: 54,
  background: theme.palette.themeDarkAlt,
})
export default class WindowFrame extends React.Component {

  render() {
    return (
      <div {...css(windowFrame)}>
        <Stack.Item horizontal='true' verticalFill={true} align='center'>
          {/**<TextField className='searchField' />**/}
        </Stack.Item>
      </div>
    )
  }
}
