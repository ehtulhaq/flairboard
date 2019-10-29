import React from 'react'
import { CommandBar, Stack, getTheme, Text } from 'office-ui-fabric-react'
import { css } from 'glamor'
import { withRouter } from 'react-router-dom'
/**
 * SecondaryCommandBar component that displays common tasks on Dashboard
 *
 * @author [Ehtesham Ul Haq]
 */

const theme = getTheme()
const secondaryCommandBarContainer = css({
  background: theme.palette.neutralLighterAlt,
  width: '96%',
  position: 'fixed',
  zIndex: 1
})
const boardTitle = css({
  flex: 1
})
class BoardsCommandBar extends React.Component {
  render = () => {
    return (
      <Stack horizontal={true} horizontalAlign='start' verticalAlign='center' className='pr-2 pl-2 pt-1 ml-0 mr-0' {...css(secondaryCommandBarContainer)}>
        <Text variant='xxLarge' {...css(boardTitle)}>WEB OCTOBER 2019</Text>
        <CommandBar
          className='secondaryCommandBar'
          farItems={this._getItmes()}
        />
      </Stack>
    )
  }

  _getItmes = () => {
    return [
      {
        key: 'newItem',
        name: 'New',
        cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
        iconProps: {
          iconName: 'Add'
        },
        className: 'secondaryCommandBarButton',
        ariaLabel: 'New',
        subMenuProps: {
          items: [
            {
              key: 'emailMessage',
              name: 'Email message',
              iconProps: {
                iconName: 'Mail'
              }
            },
            {
              key: 'calendarEvent',
              name: 'Calendar event',
              iconProps: {
                iconName: 'Calendar'
              }
            }
          ]
        }
      },
      {
        key: 'upload',
        name: 'Upload',
        iconProps: {
          iconName: 'Upload'
        },
        className: 'secondaryCommandBarButton',
        href: 'https://dev.office.com/fabric'
      },
      {
        key: 'share',
        name: 'Share',
        iconProps: {
          iconName: 'Share'
        },
        className: 'secondaryCommandBarButton',
        onClick: () => console.log('Share')
      },
      {
        key: 'download',
        name: 'Download',
        iconProps: {
          iconName: 'Download'
        },
        className: 'secondaryCommandBarButton',
        onClick: () => console.log('Download')
      }, {
        key: 'allboards',
        name: 'All Boards',
        iconProps: {
          iconName: 'WaffleOffice365'
        },
        className: 'secondaryCommandBarButton',
        onClick: () => { this.props.history.push('/boards') }
      }
    ];
  }
}


export default withRouter(BoardsCommandBar)