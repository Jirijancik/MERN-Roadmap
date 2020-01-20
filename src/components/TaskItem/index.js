import React from 'react';
import Draggable from '../DragableItem'

const TaskItem = React.forwardRef(({taskName, taskDifficulty, x = 100, y = 100}, ref) => (

    const itemStyle = {
        color:"white",
        backgroundColor:"black",
        fontSize: "30px",
        width:"100%",
        height:"100%",
        padding: "30px 10px"
    }

  return (
    <Draggable x={x} y={y}>
        <div style={itemStyle}>
            <h2>{taskName}</h2>
            <p>{taskDifficulty}</p>
        </div>
    </Draggable>
  );
)

TaskItem.defaultProps = {
    taskName:"Default Name",
    taskDifficulty:0
}

export default TaskItem;
