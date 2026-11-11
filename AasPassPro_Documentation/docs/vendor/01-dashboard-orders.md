# Vendor Module — Dashboard & Orders

## 1. Purpose

The Vendor Dashboard provides an interface for vendors to view customer orders, check order summaries, filter orders by status, and view order details.

This version uses local sample data.

## 2. Dashboard Summary

The dashboard currently displays two summary cards:

- New Orders
- In Progress Orders

Completed Orders count and Completed Sales summary are not implemented yet.

## 3. Order Status Filters

Users can filter orders using the following options:

| Filter | Description |
|---|---|
| All | Displays all orders |
| New | Displays new orders |
| In progress | Displays orders being processed |
| Completed | Displays completed orders |

## 4. Order Cards

Each order card displays information about an individual order.

The application uses the reusable `OrderCard` component to display order information.

## 5. Order Details

When a user selects an order card, the application opens a full-screen Order Details view.

The details include:

- Order reference
- Order status
- Store name
- Order time
- Item count
- Payment method
- Total amount

A Back button allows the user to return to the dashboard.

**Note:** Order details are displayed using a full-screen view, not a Modal.

## 6. Order Status

The application supports these order status values:

- New
- In progress
- Completed

Users can filter orders using these statuses.

**Note:** Changing an order's status is not implemented in the current version.

The following status workflow is planned for future development:

```text
New → In progress → Completed
```

## 7. React Native Concepts Used

- `useState` — manages UI state and selected order information.
- `useMemo` — helps calculate the filtered order list.
- `ScrollView` — displays the order list.
- `.map()` — renders order cards from the order data.
- `Pressable` — handles user taps.
- `Props` — passes order information to the `OrderCard` component.

## 8. Verification Checklist

### Currently Implemented

- [ ] Dashboard opens successfully.
- [ ] Sample orders appear on the dashboard.
- [ ] New Orders summary is displayed.
- [ ] In Progress Orders summary is displayed.
- [ ] All status filters work.
- [ ] Order details open when selecting an order card.
- [ ] Back button returns to the dashboard.

### Planned for Future Development

- [ ] Search orders by order ID or store name.
- [ ] Completed Orders summary.
- [ ] Completed Sales summary.
- [ ] Update order status.
- [ ] Update dashboard summaries after status changes.
- [ ] Handle empty search results.

## 9. Known Limitations

- The application uses local sample data.
- No backend API is connected.
- No database is connected.
- Login and authentication are not implemented.
- Order status updates are not implemented.
- Order data is not permanently stored.
- Original sample data is restored after restarting the application.

## 10. Future Improvements

- Add order search functionality.
- Implement order status updates.
- Add completed order and sales summaries.
- Connect a backend API.
- Integrate a database.
- Add vendor authentication.

## 11. Conclusion

The current Vendor Dashboard is a frontend demonstration that allows vendors to view order summaries, filter orders, and view order details.

Additional order management features and backend integration are planned for future development.

**Documentation Version:** v0.1 Draft
