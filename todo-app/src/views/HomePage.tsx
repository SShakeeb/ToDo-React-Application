import React, { useEffect, useState } from 'react';
import { getTodo } from '../models/todoModel';
import { TodoApiData } from '../types';
import ListView  from './ListView';

const HomePage = () => {
    // NOTE: In the following useState type I was trying to double destructuring 
    // in the child component (ListView) by doing that type error resolves but First time page 
    // always remain blank. I knew that any is a bad practice in ts  
    const [list,setList] = useState<TodoApiData | any>();
    // useEffect renders List
    useEffect(() => {
        getTodo().then(data=> {
            setList(data);
        })
    }, []);

    return (
        <div>
            <h1>TodoList</h1>
            <div>
                {list && <ListView data={list} />}
            </div>
        </div>
    );
}

export default HomePage;