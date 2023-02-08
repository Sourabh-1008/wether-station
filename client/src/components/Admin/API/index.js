export const getOrders = () => {
  return fetch("http://localhost:4000/api/v1/users").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("http://localhost:4000/api/v1/nodes").then((res) => res.json());
};
// http://localhost:4000/api/v1/nodes
//
export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};
export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};
//res.data.node)