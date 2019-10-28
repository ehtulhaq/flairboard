import React from 'react'
import { PivotItem, Pivot, Label } from 'office-ui-fabric-react'
import {css} from 'glamor'
/**
 * TasksPivots component that shows list of tasks
 *
 * @author [Ehtesham Ul Haq]
 */

const pivotList = css({
  flex: '100% !important'
})
class TasksPivots extends React.Component {

  render() {
    return (
      <div className='m-0' {...css(pivotList)}>
        <Pivot>
          <PivotItem headerText="My Files" itemCount={42} itemIcon="Emoji2">
            {this.props.children}
          </PivotItem>
          <PivotItem itemCount={23} itemIcon="Recent">
            <Label>Pivot #2</Label>
          </PivotItem>
          <PivotItem headerText="Placeholder" itemIcon="Globe">
            <Label>Pivot #3</Label>
          </PivotItem>
          <PivotItem headerText="Shared with me" itemIcon="Ringer" itemCount={1}>
            <Label>Pivot #4</Label>
          </PivotItem>
          <PivotItem headerText="Customized Rendering" itemIcon="Globe" itemCount={10}>
            <Label>Customized Rendering</Label>
          </PivotItem>
        </Pivot>
      </div >
    )
  }
}

export default TasksPivots