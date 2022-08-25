import { createContext, useState } from 'react';

export const OrderContext = createContext(null);

const OrderProvider = ({ children }) => {
  const [ordersList, setOrdersList] = useState([]);
  const placeOrder = (newOrder) => {
    setOrdersList([...ordersList, newOrder]);
  };
  const updateStatus = (orderId) => {};
  return (
    <OrderContext.Provider value={{ ordersList, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
export default OrderProvider;
