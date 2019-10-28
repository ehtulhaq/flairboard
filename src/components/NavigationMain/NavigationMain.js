import React from 'react'
import { Stack, FontIcon, OverflowSet, Text, getTheme, loadTheme } from 'office-ui-fabric-react'
import { Link } from 'react-router-dom'
import { css } from 'glamor'
/**
 * Navigation component that sticks on the top with all navigation links
 *
 * @author [Ehtesham Ul Haq]
 */
loadTheme({
  palette: {
    themePrimary: '#007baa',
    themeLighterAlt: '#f2f9fc',
    themeLighter: '#cbe7f1',
    themeLight: '#a1d2e6',
    themeTertiary: '#52aacc',
    themeSecondary: '#1688b5',
    themeDarkAlt: '#006e99',
    themeDark: '#005d81',
    themeDarker: '#00455f',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#bab8b7',
    neutralSecondary: '#a3a2a0',
    neutralPrimaryAlt: '#8d8b8a',
    neutralPrimary: '#323130',
    neutralDark: '#605e5d',
    black: '#494847',
    white: '#ffffff',
    success: '#00d280',
    danger: '#de212d',
  }
})
const theme = getTheme()
const stackClass = css({
  maxWidth: 100,
  width: 80,
  background: theme.palette.themeDarker,
  justifyContent: 'space-between'
})

const linkClass = css({
  width: '100%',
  height: 40,
  paddingTop: 14,
  paddingBottom: 8,
  textDecoration: 'none',
  ':hover': {
    background: theme.palette.themeDark,
    textDecoration: 'none !important'
  },
  ':active': {
    textDecoration: 'none !important'
  },
  ':action:hover': {
    textDecoration: 'none !important'
  }
})

const fontClass = css({
  fontSize: 22,
  display: 'flex',
  justifyContent: 'center',
  color: theme.palette.themeLighterAlt
})

const textClass = css({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 5,
  color: theme.palette.themeLighterAlt
})

const versionText = css({
  color: theme.palette.neutralTertiary,
  alignSelf: 'center',
  textAlign: 'center',
  marginBottom: 15
})

class NavigationMain extends React.Component {

  render() {
    return (
      <Stack verticalFill={true} verticalAlign='top' {...css(stackClass)}>
        <OverflowSet
          vertical
          items={[
            {
              key: 'boards',
              name: 'Boards',
              url: '/boards',
              icon: 'StackIndicator',
            }, {
              key: 'reports',
              name: 'Reports',
              url: '/reports',
              icon: 'FinancialSolid'
            }, {
              key: 'templates',
              name: 'Templates',
              url: '/templates',
              icon: 'PageListSolid'
            }, {
              key: 'settings',
              name: 'Settings',
              url: '/settings',
              icon: 'Settings'
            }, {
              key: 'chat',
              name: 'Chat',
              url: '/chat',
              icon: 'OfficeChatSolid'
            }, {
              key: 'help',
              name: 'Help',
              url: '/help',
              icon: 'InfoSolid'
            }
          ]
          }
          onRenderItem={this.onRenderItem}
        />
        <Text variant='tiny' {...css(versionText)}>Version 1.0.0</Text>
      </Stack>
    )
  }

  onRenderItem = (item) => {
    return (
      <Link {...css(linkClass)} to={item.url}>
        <FontIcon {...css(fontClass)} iconName={item.icon} />
        <Text {...css(textClass)} variant='tiny'>{item.name}</Text>
      </Link>
    )
  }
}


export default NavigationMain