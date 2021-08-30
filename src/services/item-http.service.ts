import http from "../http-common";
import { ListItemType } from "typings/listItem";

export const getAllItems = () => {
  return http.get("/items");
};

export const getItem = (id: string) => {
  return http.get(`/items/${id}`);
};

export const createItem = (data: ListItemType) => {
  return http.post("/items", data);
};

export const updateItem = (id: string, data: ListItemType) => {
  return http.put(`/items/${id}`, data);
};

export const removeItem = (id: string) => {
  return http.delete(`/items/${id}`);
};
