import { useReducer } from "react";
import { createContainer, createReducer, createAction } from "utils/context";
import { toast } from "react-toastify";

import { ListItemType } from "typings/listItem";
import {
  getAllItems,
  createItem,
  removeItem,
  updateItem,
} from "services/item-http.service";

const initialState = {
  list: [],
};
const actions = {
  addList: createAction("ADD_LIST"),
};

const appReducer = createReducer({
  [actions.addList.toString()]: (state, { payload }) => ({
    ...state,
    list: payload,
  }),
});

export const { useContext: useApp, Provider: AppProvider } = createContainer(
  () => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const getAllItemList = async () => {
      getAllItems().then((res) => dispatch(actions.addList(res.data)));
    };

    const addList = async (obj: ListItemType) => {
      createItem(obj)
        .then(() => {
          toast.success("Create success");
          getAllItemList();
        })
        .catch(() => toast.error("Create failed"));
    };

    const deleteItem = async (id: string) => {
      removeItem(id)
        .then(() => {
          toast.success("Delete success");
          getAllItemList();
        })
        .catch(() => toast.error("Delete failed"));
    };
    const editItem = async (obj: ListItemType) => {
      updateItem(obj.id!, obj)
        .then(() => {
          toast.success("Create success");
          getAllItemList();
        })
        .catch(() => toast.error("Update failed"));
    };

    return {
      state,
      actions: {
        addList,
        deleteItem,
        editItem,
        getAllItemList,
      },
    };
  }
);

export default useApp;
