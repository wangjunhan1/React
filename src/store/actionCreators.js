import axios from 'axios';
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM, AJAX_DATA } from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const initListAction = (data) => ({
  type: AJAX_DATA,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then((res) => {
        const data = res.data;
        const action = initListAction(data);
        dispatch(action);
    })
  }
}