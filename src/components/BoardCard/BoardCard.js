import React from 'react'
import { Stack, Text, IconButton, FontIcon, getTheme } from 'office-ui-fabric-react'
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip'
import { getId } from 'office-ui-fabric-react/lib/Utilities'
import { Link } from 'react-router-dom'
import { css } from 'glamor'
/**
 * CardList component that shows list of boards
 *
 * @author [Ehtesham Ul Haq]
 */

const theme = getTheme()
const cardProps = css({
  maxWidth: 300
})

const alertIcon = css({
  fontSize: 16,
  verticalAlign: 'bottom',
  color: theme.palette.success
})

const headLink = css({
  color: theme.palette.black,
  textDecoration: 'none',
  ':hover': {
    color: theme.palette.themePrimary,
  }
})

const cardAction = css({
  borderBottom: '1px solid ' + theme.palette.neutralLighter
})

const copyID = getId('copyID')
const infoID = getId('infoID')
const completedOnID = getId('completedOnID')
const instanceID = getId('instanceID')
class CardsList extends React.Component {

  render = () => {
    return (
      <div className='card m-0' {...css(cardProps)}>
        <Stack horizontal={true} horizontalAlign={true} {...css(cardAction)}>
          <Stack.Item aria-describedby={completedOnID} grow={3} verticalFill={true} className='pl-1' align='center'>
            <TooltipHost
              content='Completed On'
              id={completedOnID}
              calloutProps={{ gapSpace: 0 }}
              styles={{ root: { display: 'inline-block' } }}
            >
              <FontIcon iconName='SkypeCircleCheck' {...css(alertIcon)}></FontIcon>
              <Text variant='medium' className='pl-0'>{(new Date()).toDateString()}</Text>
            </TooltipHost>
          </Stack.Item>
          <Stack.Item align='right' ariaLabel='Copy'>
            <TooltipHost
              content='Create a New Board from this template'
              id={copyID}
              calloutProps={{ gapSpace: 0 }}
              styles={{ root: { display: 'inline-block' } }}
            >
              <IconButton aria-describedby={copyID} iconProps={{ iconName: 'PageAdd' }} />
            </TooltipHost>
          </Stack.Item>
          <Stack.Item align='right'>
            <TooltipHost
              content='Create Instance from this board'
              id={instanceID}
              calloutProps={{ gapSpace: 0 }}
              styles={{ root: { display: 'inline-block' } }}
            >
              <IconButton aria-describedby={instanceID} iconProps={{ iconName: 'Copy' }} />
            </TooltipHost>
          </Stack.Item>
          <Stack.Item align='right'>
            <TooltipHost
              content='Get Info about this board'
              id={infoID}
              calloutProps={{ gapSpace: 0 }}
              styles={{ root: { display: 'inline-block' } }}
            >
              <IconButton aria-describedby={infoID} iconProps={{ iconName: 'Info' }} />
            </TooltipHost>
          </Stack.Item>
        </Stack>
        <div className='card-head p-1'>
          <Link to='/board-details' {...css(headLink)}>
            <Text variant='xLarge'>
              WEB OCTOBER 2019
            </Text>
          </Link>
        </div>
        <div className='card-body pb-1 pr-1 pl-1'>
          <Text variant='medium'>Lorem ipsum some text that i would like to displayLorem ipsum some text that i would like to displayLorem ipsum some text that i would like to display</Text>
        </div>
      </div>
    )
  }
}

export default CardsList