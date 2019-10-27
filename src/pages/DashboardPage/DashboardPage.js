import React from 'react'
import { BasePage } from '../../pages'
import { Stack, Text, FontIcon, CommandBar, SearchBox } from 'office-ui-fabric-react'
import { css } from 'glamor'

/**
 * DashboardPage is a sample dashboard page that includes BasePage
 * 
 * @author [Ehtesham Ul Haq]
 */
const fontClass = css({
  fontSize: 32
})
const areaRight = css({
  flex: '100%'
})
const searchField = css({
  flex: '50%',
  display:'flex'
})
export default class DashboardPage extends React.Component {
  render() {
    return (
      <BasePage>
        <Stack horizontal={true} horizontalAlign='start'>
          <FontIcon {...css(fontClass)} iconName='GoToDashboard' />
          <Text variant='xxLarge' className='ml-1'>Dashboard</Text>
          <Stack {...css(areaRight)}>
            <CommandBar
              farItems={this.getItmes()}
            />
          </Stack>
        </Stack>
        <Stack>
          <SearchBox
            className='searchFiledDashboard'
            placeholder="Search"
            onSearch={newValue => console.log('value is ' + newValue)}
            onFocus={() => console.log('onFocus called')}
            onBlur={() => console.log('onBlur called')}
            onChange={() => console.log('onChange called')}
          />
        </Stack>
      </BasePage>
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
        href: 'https://dev.office.com/fabric'
      },
      {
        key: 'share',
        name: 'Share',
        iconProps: {
          iconName: 'Share'
        },
        onClick: () => console.log('Share')
      },
      {
        key: 'download',
        name: 'Download',
        iconProps: {
          iconName: 'Download'
        },
        onClick: () => console.log('Download')
      }
    ];
  }
}
