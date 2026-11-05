# Vendor Module — Dashboard & Orders

## Purpose
A single screen for vendors to review customer orders and update order progress.

## Dashboard Summary
Displays new orders, in-progress orders, completed orders, and total completed sales.

## Search
Searches by order ID, store name, or payment method.

## Status Filters
| Filter | Result |
|---|---|
| All | All orders |
| New | New orders |
| In progress | Orders being processed |
| Completed | Completed orders |

## Order Details
Selecting an order displays its reference, status, store name, order time, item count, payment method, and total amount.

## Status Lifecycle
```text
New → In progress → Completed
```
Status updates are stored only in app memory in this version.

## React Concepts
- `useState` — changing UI and order state.
- `useMemo` — derived filtered order list.
- `FlatList` — renders orders.
- `Modal` — displays order details.
- `Pressable` — handles taps.
- Props — pass order data and handlers to `OrderCard`.

## Verification Checklist
- [ ] Dashboard opens and sample orders appear.
- [ ] Search by order ID and store name works.
- [ ] All status filters work.
- [ ] Order details open from a card.
- [ ] New → In progress → Completed works.
- [ ] Summary values update after status changes.
- [ ] Empty search results are handled.

## Known Limitations
Sample data only; no API, database persistence, login, or authentication. Changes reset after app restart.
