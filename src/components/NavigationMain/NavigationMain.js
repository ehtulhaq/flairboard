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
    themePrimary: '#22c887',
    themeLighterAlt: '#f4fdfa',
    themeLighter: '#d5f6e9',
    themeLight: '#b3efd7',
    themeTertiary: '#6fdeb3',
    themeSecondary: '#37cf94',
    themeDarkAlt: '#1eb47a',
    themeDark: '#1a9867',
    themeDarker: '#13704c',
    neutralLighterAlt: '#ececec',
    neutralLighter: '#e8e8e8',
    neutralLight: '#dfdfdf',
    neutralQuaternaryAlt: '#d0d0d0',
    neutralQuaternary: '#c6c6c6',
    neutralTertiaryAlt: '#bebebe',
    neutralTertiary: '#bab8b7',
    neutralSecondary: '#a3a2a0',
    neutralPrimaryAlt: '#8d8b8a',
    neutralPrimary: '#323130',
    neutralDark: '#605e5d',
    black: '#494847',
    white: '#f3f3f3',
  }
})
const theme = getTheme()
const stackClass = css({
  maxWidth: 100,
  width: 80,
  background: theme.palette.themeDarker
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

export default class NavigationMain extends React.Component {

  render() {
    return (
      <Stack verticalFill={true} verticalAlign='top' {...css(stackClass)}>
        <OverflowSet
          vertical
          items={[
            {
              key: 'key0',
              name: 'Home',
              url: '/dashboard',
              icon: 'HomeSolid',
            }, {
              key: 'key1',
              name: 'Dashboards',
              url: '/dashboard',
              icon: 'GoToDashboard',
            }, {
              key: 'key2',
              name: 'Tasks',
              url: '/tasks',
              icon: 'TaskLogo'
            }, {
              key: 'key3',
              name: 'Reports',
              url: '/reports',
              icon: 'ReportDocument'
            }, {
              key: 'key4',
              name: 'Templates',
              url: '/templates',
              icon: 'FileTemplate'
            }, {
              key: 'key5',
              name: 'Settings',
              url: '/settings',
              icon: 'Settings'
            }, {
              key: 'key6',
              name: 'Help',
              url: '/help',
              icon: 'Info'
            }
          ]
          }
          onRenderItem={this.onRenderItem}
        />
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
