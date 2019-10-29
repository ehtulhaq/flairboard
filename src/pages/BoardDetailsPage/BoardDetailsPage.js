import React from 'react'
import { BasePage } from '..'
import { Stack } from 'office-ui-fabric-react'
import { css } from 'glamor'
import { TasksPivots, BoardDetailsCB, BoardCard } from '../../components'

/**
 * TasksPage is a tasks page that includes BasePage
 * 
 * @author [Ehtesham Ul Haq]
 */
const boardWrapper = css({
  marginTop: 60
})
class BoardDetails extends React.Component {
  render = () => {
    return (
      <BasePage>
        <BoardDetailsCB />
        <Stack className='p-2' {...css(boardWrapper)} horizontal wrap>
          <TasksPivots>
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
          </TasksPivots>
        </Stack>
      </BasePage>
    )
  }
}

export default BoardDetails