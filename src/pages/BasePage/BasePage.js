import React from 'react'
import { NavigationMain, WindowFrame } from '../../components'
import { Stack } from 'office-ui-fabric-react/lib/Stack'
import { css } from 'glamor'
import { getTheme } from '@uifabric/styling'

/**
 * BasePage class that is 'extended' by every page
 * includes common components that appear on all pages
 * 
 * @author [Ehtesham Ul Haq]
 */
const theme = getTheme()
const stackStyles = css({
  background: theme.palette.white,
  flex: '100%'
})
const areaRight = css({
  padding: '20px !important',
  flex: '100%'
})
export default class BasePage extends React.Component {
  render() {
    return (
      <Stack verticalFill={true}>
        <WindowFrame />
        <Stack horizontal={true} horizontalAlign='start' {...css(stackStyles)} verticalFill={true}>
          <Stack margin={10}>
            <NavigationMain />
          </Stack>
          <div {...css(areaRight)}>
            {this.props.children}
          </div>
          {/** Placeholder for footer */}
        </Stack>
      </Stack>
    )
  }
}
