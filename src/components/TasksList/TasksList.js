import React from 'react'
import { css } from 'glamor'
import { DetailsList, buildColumns, Selection, Link } from 'office-ui-fabric-react'
import { getTheme } from '@uifabric/styling'
/**
 * TasksPivots component that shows list of tasks
 *
 * @author [Ehtesham Ul Haq]
 */

const theme = getTheme()
const pivotList = css({
  flex: '100% !important'
})
const dragEnterClass = {
  backgroundColor: theme.palette.themeLighterAlt
}
class TasksPivots extends React.Component {
  constructor(props) {
    super(props)

    this._selection = new Selection()
    this._dragDropEvents = this._getDragDropEvents()
    this._draggedIndex = -1
    const items = this._getItems()

    this.state = {
      items: items,
      columns: buildColumns(items, true),
      isColumnReorderEnabled: true,
      frozenColumnCountFromStart: '1',
      frozenColumnCountFromEnd: '0'
    }
  }
  render = () => {
    return (
      <div className='m-0' {...css(pivotList)}>
        <DetailsList
          setKey='items'
          items={this.state.items}
          columns={this.state.columns}
          selection={this._selection}
          selectionPreservedOnEmptyClick={true}
          checkboxVisibility={false}
          onItemInvoked={this._onItemInvoked}
          onRenderItemColumn={this._onRenderItemColumn}
          dragDropEvents={this._dragDropEvents}
          columnReorderOptions={this.state.isColumnReorderEnabled ? this._getColumnReorderOptions() : undefined}
          ariaLabelForSelectionColumn="Toggle selection"
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          checkButtonAriaLabel="Row checkbox"
        />
      </div >
    )
  }

  _getItems = () => {
    return [
      {
        name: 'Ehtesham',
        email: 'abc@gmail.com',
        details:'This is pretty long test to check how it behaves. Hopefully it can acoomodate a'
      }
    ]
  }

  _handleColumnReorder = (draggedIndex, targetIndex) => {
    const draggedItems = this.state.columns[draggedIndex]
    const newColumns = [...this.state.columns]

    // insert before the dropped item
    newColumns.splice(draggedIndex, 1)
    newColumns.splice(targetIndex, 0, draggedItems)
    this.setState({ columns: newColumns })
  }

  _getColumnReorderOptions() {
    return {
      frozenColumnCountFromStart: parseInt(this.state.frozenColumnCountFromStart, 10),
      frozenColumnCountFromEnd: parseInt(this.state.frozenColumnCountFromEnd, 10),
      handleColumnReorder: this._handleColumnReorder
    }
  }

  _validateNumber(value) {
    return isNaN(Number(value)) ? `The value should be a number, actual is ${value}.` : ''
  }

  _onChangeStartCountText = (event) => {
    this.setState({ frozenColumnCountFromStart: event })
  }

  _onChangeEndCountText = (event, text) => {
    this.setState({ frozenColumnCountFromEnd: text })
  }

  _onChangeColumnReorderEnabled = (ev, checked) => {
    this.setState({ isColumnReorderEnabled: checked })
  }

  _getDragDropEvents = () => {
    return {
      canDrop: (dropContext, dragContext) => {
        return true
      },
      canDrag: (item) => {
        return true
      },
      onDragEnter: (item, event) => {
        // return string is the css classes that will be added to the entering element.
        return dragEnterClass
      },
      onDragLeave: (item, event) => {
        return
      },
      onDrop: (item, event) => {
        if (this._draggedItem) {
          this._insertBeforeItem(item)
        }
      },
      onDragStart: (item, itemIndex, selectedItems, event) => {
        this._draggedItem = item
        this._draggedIndex = !itemIndex
      },
      onDragEnd: (item, event) => {
        this._draggedItem = undefined
        this._draggedIndex = -1
      }
    }
  }

  _onItemInvoked = (item) => {
    alert(`Item invoked: ${item.name}`)
  }

  _onRenderItemColumn = (item, index, column) => {
    const key = column.key
    if (key === 'name') {
      return <Link data-selection-invoke={true}>{item[key]}</Link>
    }

    return String(item[key])
  }

  _insertBeforeItem(item) {
    const draggedItems = this._selection.isIndexSelected(this._draggedIndex) ? (this._selection.getSelection()) : [!this._draggedItem]

    const items = this.state.items.filter(itm => draggedItems.indexOf(itm) === -1)
    let insertIndex = items.indexOf(item)

    // if dragging/dropping on itself, index will be 0.
    if (insertIndex === -1) {
      insertIndex = 0
    }

    items.splice(insertIndex, 0, ...draggedItems)

    this.setState({ items: items })
  }
}

export default TasksPivots