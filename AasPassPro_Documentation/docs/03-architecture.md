# 03 — Architecture Overview

## Structure
```text
App.tsx
 ├── Dashboard summary
 ├── Search and status filters
 ├── FlatList
 │    └── OrderCard
 └── Order details modal

data/orders.ts  → sample order records
types/order.ts  → TypeScript order/status/filter types
index.js        → registers App with Expo
```

## File Responsibilities
| File | Responsibility |
|---|---|
| `App.tsx` | Main screen, summary, search, filters, details, status updates |
| `index.js` | Registers the root App component |
| `components/OrderCard.tsx` | Reusable order card |
| `data/orders.ts` | Sample order data |
| `types/order.ts` | TypeScript definitions |

## Order Data Model
| Property | Type | Meaning |
|---|---|---|
| `id` | string | Order reference |
| `placedAt` | string | Order time |
| `itemCount` | number | Number of items |
| `storeName` | string | Store name |
| `total` | number | Order amount |
| `paymentMethod` | string | Payment type |
| `status` | OrderStatus | Current status |

`OrderStatus` includes `New`, `In progress`, and `Completed`. `OrderFilter` includes `All` and those statuses.

## Data Flow
1. Sample records load from `data/orders.ts`.
2. `App.tsx` holds the current order and UI state.
3. Search and filter selections determine visible orders.
4. `FlatList` renders `OrderCard` components.
5. Selecting a card opens its details.
6. Updating status changes in-memory state and dashboard summaries.

**Persistence note:** Restarting the app restores the original sample data.
