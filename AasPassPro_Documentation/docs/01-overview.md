# 01 — Project Overview

## Introduction
AasPass Pro is a mobile vendor dashboard interface. Vendors can review order summaries, search and filter orders, view order details, and update order progress. This build uses local sample data.

## Objectives
- Provide a clear vendor dashboard.
- Show order counts and completed sales.
- Search and filter orders.
- Display complete order details.
- Demonstrate a basic order lifecycle.

## Features
| Feature | Description |
|---|---|
| Summary cards | New, in-progress, completed counts and completed sales |
| Search | Search by order ID, store name, or payment method |
| Filters | All, New, In progress, Completed |
| Details | Reference, status, store, time, item count, payment, amount |
| Status workflow | New → In progress → Completed |

## Technology
React Native, Expo, TypeScript, JavaScript, React Hooks, and React Native StyleSheet.

## Current Scope and Limitations
This is a frontend demonstration. There is no live API, database, vendor login, or authentication. Order status changes are held in app memory and reset after restart.

## Future Enhancements
NestJS REST API, PostgreSQL, Supabase Auth, Prisma ORM, JWT, RBAC, persistent updates, and push notifications.
