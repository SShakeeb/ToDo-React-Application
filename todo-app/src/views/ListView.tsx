import React, { useState, ReactElement } from 'react';
import { Todo, TodoApiData } from '../types';
import { updateTodo } from '../models/todoModel';

// Note: I used this type with double destructor but First time page also remain blank.
// I will try to fix this issue later some time 
// type ListViewProps = {
//     data: TodoApiData;
// }

const ListView = ({data}: TodoApiData): ReactElement => {
    const [state, setState] = useState(data);
    // Following Function is to Toggle Status
    const _changeStatus = (toChange: Todo) => {
        let st = "done";
        if(toChange.status === "done"){
            st = "pending"
        }
        return {
            ...toChange, status: st, 
        } 
    };
    //Following Function is to Update Status and setting state after change of status
    const updateFunction = async (toUpdate: Todo) => {
        const modified = _changeStatus(toUpdate);
        const response = await updateTodo(modified);
        // Following Function is written to update state for setState when Clicked by mouse to change status
        const _data = state.map(item => {
            if (item.id === response['id'])
            {
                return { ...item, status: response['status']}
            }
            return item;
        });
        // Setting state
        setState(_data);
    };
    return (
        <table>
        {state &&
          <tr key={"header"}>
            {Object.keys(state[0]).map((key) => (
              <th>{key}</th>
            ))}
          </tr>}
          {state && state.map((item) => ( 
            <tr key={item.id} onClick={() => updateFunction(item)}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </table>
      );
}

export default ListView;
