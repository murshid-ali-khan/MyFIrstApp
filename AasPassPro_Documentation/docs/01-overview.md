# 01 — Project Overview

## Introduction

AasPass Pro is a mobile vendor dashboard interface built using React Native and Expo. It allows vendors to view order summaries, filter orders by status, and view individual order details.

The application currently uses local sample order data and is designed as a frontend demonstration.

## Objectives

- Provide a simple and clear vendor dashboard.
- Display new and in-progress order summaries.
- Allow vendors to filter orders by status.
- Display detailed information about individual orders.
- Demonstrate the basic structure of a vendor order management interface.

## Implemented Features

| Feature | Description | Status |
|---|---|---|
| New Orders Summary | Displays the number of new orders. | Implemented |
| In Progress Summary | Displays the number of orders in progress. | Implemented |
| Order Filters | Filters orders by All, New, In progress, and Completed. | Implemented |
| Order Details | Displays order information, including reference, status, store, time, item count, payment method, and amount. | Implemented |
| Back Navigation | Allows users to return from the order details screen to the dashboard. | Implemented |

## Planned Features

| Feature | Description | Status |
|---|---|---|
| Order Search | Search orders by order ID, store name, or payment method. | Planned |
| Completed Orders Summary | Display the total number of completed orders. | Planned |
| Completed Sales Summary | Display the total sales amount from completed orders. | Planned |
| Order Status Updates | Allow vendors to change an order from New to In progress and then Completed. | Planned |

## Technology Stack

- React Native
- Expo SDK 58
- TypeScript
- JavaScript
- React Hooks
- React Native StyleSheet

## Current Scope and Limitations

This project is currently a frontend demonstration.

- Order information comes from local sample data.
- No live backend API is connected.
- No database is connected.
- Vendor login and authentication are not implemented.
- Order status updates are not currently implemented.
- The application does not save order changes permanently.

## Future Enhancements

The following features and technologies are planned for future development:

- NestJS REST API for backend services.
- PostgreSQL for database management.
- Prisma ORM for database operations.
- Supabase Auth for authentication.
- JWT for token-based authentication.
- Role-Based Access Control (RBAC).
- Persistent order updates.
- Push notifications.

## Conclusion

AasPass Pro currently provides a basic vendor dashboard with order summaries, status filters, and an order details screen. It serves as a frontend foundation for future development of a complete vendor order management application.