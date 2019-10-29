import React from 'react'
import { BasePage } from '..'
import { BoardCard, BoardsCB } from '../../components'
import { Stack } from 'office-ui-fabric-react'
import { css } from 'glamor'

/**
 * BoardsPage is a dashboard page that includes BasePage
 * 
 * @author [Ehtesham Ul Haq]
 */

const boardWrapper = css({
  marginTop: 60
})
class BoardsPage extends React.Component {
  render = () => {
    return (
      <BasePage>
        <BoardsCB />
        <div className='mt-4'></div>
        <Stack className='p-2' {...css(boardWrapper)} horizontal wrap>
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </Stack>
      </BasePage>
    )
  }
}

export default BoardsPage