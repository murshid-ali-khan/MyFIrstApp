# 03 — Architecture Overview

## 1. Project Structure

The application is built using React Native, Expo, and TypeScript.

```text
MyFirstApp/
│
├── App.tsx
│
├── index.js
│
├── components/
│   └── OrderCard.tsx
│
├── data/
│   └── orders.ts
│
└── types/
    └── order.ts
```

## 2. Application Structure

```text
App.tsx
│
├── Dashboard Summary
│   ├── New Orders
│   └── In Progress Orders
│
├── Order Status Filters
│   ├── All
│   ├── New
│   ├── In Progress
│   └── Completed
│
├── ScrollView
│   └── OrderCard
│
└── Order Details View
    └── Back Button
```

**Note:** The order list uses `ScrollView` and `.map()` to display order cards. Order details open as a full-screen view, not a Modal.

## 3. File Responsibilities

| File | Responsibility |
|---|---|
| `App.tsx` | Main dashboard screen, summary cards, filters, and order details view |
| `index.js` | Registers the root App component with Expo |
| `components/OrderCard.tsx` | Displays an individual order card |
| `data/orders.ts` | Contains sample order records |
| `types/order.ts` | Defines TypeScript order, status, and filter types |

## 4. Order Data Model

The application uses the following order properties:

| Property | Type | Meaning |
|---|---|---|
| `id` | string | Order reference |
| `placedAt` | string | Order time |
| `itemCount` | number | Number of items |
| `storeName` | string | Store name |
| `total` | number | Order amount |
| `paymentMethod` | string | Payment type |
| `status` | OrderStatus | Current order status |

### Order Status

`OrderStatus` includes:

- New
- In progress
- Completed

### Order Filter

`OrderFilter` includes:

- All
- New
- In progress
- Completed

## 5. Data Flow

1. Sample order records are loaded from `data/orders.ts`.
2. `App.tsx` manages the dashboard UI state and selected order.
3. The selected status filter determines which orders are displayed.
4. `ScrollView` and `.map()` render the `OrderCard` components.
5. Selecting an order card opens its full-screen details view.
6. The Back button returns the user to the dashboard.

## 6. Current Implementation and Limitations

- The application uses local sample order data.
- The dashboard displays New and In Progress summary cards.
- Users can filter orders by status.
- Users can open order details and return to the dashboard.
- Search functionality is not implemented.
- Order status updates are not implemented.
- There is no backend API or database connection.
- Order data is not permanently stored.

## 7. Future Improvements

The following features are planned for future development:

- Search orders by order ID or store name.
- Completed orders summary.
- Completed sales summary.
- Update order status.
- Backend API integration.
- Database integration.
- Vendor authentication and authorization.

## 8. Conclusion

The current application is a frontend demonstration of a vendor order dashboard. It uses reusable components, TypeScript types, and local sample data to display and filter orders. Backend integration and advanced order management features can be added in future versions.
