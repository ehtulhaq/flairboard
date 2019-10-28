import React from 'react'
import { CommandBar, SearchBox, Stack, getTheme } from 'office-ui-fabric-react'
import { css } from 'glamor'
import { withRouter } from 'react-router-dom'
/**
 * SecondaryCommandBar component that displays common tasks on Dashboard
 *
 * @author [Ehtesham Ul Haq]
 */

const theme = getTheme()
const secondaryCommandBarContainer = css({
  background: theme.palette.neutralLight,
  width: '96%',
  position: 'fixed',
  zIndex: 1
})
class BoardsCB extends React.Component {
  render() {
    return (
      <Stack horizontal={true} horizontalAlign='start' className='pr-2 pl-2 pt-1 ml-0 mr-0' {...css(secondaryCommandBarContainer)}>
        <SearchBox
          className='searchFiledDashboard'
          placeholder="Search"
          underlined={true}
          onSearch={newValue => console.log('value is ' + newValue)}
          onFocus={() => console.log('onFocus called')}
          onBlur={() => console.log('onBlur called')}
          onChange={() => console.log('onChange called')}
        />
        <CommandBar
          className='secondaryCommandBar'
          farItems={this.getItmes()}
        />
      </Stack>
    )
  }

  getItmes = () => {
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


export default withRouter(BoardsCB)