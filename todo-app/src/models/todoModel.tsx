import axios from 'axios';
import { TodoApiData, Todo } from "../types";
const BASE_URL = 'http://localhost:3003';
const TODO_LIST_EP = BASE_URL + '/api/todoRoutes';

export async function getTodo() {
    try{
        const { data } = await axios.get<TodoApiData>(
            TODO_LIST_EP
        );
        return data;
    } catch (error) {
        throw new Error(
            `Error in 'axiosGetJsonData(${BASE_URL})':${error}`
            );
    }
}

export async function updateTodo(todo: Todo) {
    const Path = TODO_LIST_EP + '/' + todo.id;
    try{
        const { data } = await axios.patch<Todo>(
            Path, {
                "status": todo.status
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        return data || {};
    } catch (error) {
        throw new Error(
            `Error in 'axiosUpdateJsonData(${Path})':${error}`
        )
    }
}
