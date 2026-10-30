
export type OrderStatus = "New" | "In progress" | "Completed";

export type Order = {
  id: string;
  placedAt: string;
  itemCount: number;
  storeName: string;
  total: number;
  paymentMethod: string;
  status: OrderStatus;
};

export type OrderFilter = "All" | OrderStatus;
