# AasPass Pro — Vendor Orders Dashboard

> Mobile vendor dashboard for viewing, searching, filtering, and managing customer orders.

**Status:** Frontend demonstration. Uses sample data; no backend, database, or authentication is connected.

## Repository Structure
```text
MyFirstApp/
├── App.tsx
├── index.js
├── components/OrderCard.tsx
├── data/orders.ts
├── types/order.ts
└── docs/
    ├── README.md
    ├── 01-overview.md
    ├── 02-setup.md
    ├── 03-architecture.md
    └── vendor/
        ├── README.md
        └── 01-dashboard-orders.md
```

## Quick Start
```bash
npm install
npx expo start --clear
```
Open Expo Go and scan the QR code.

## Tech Stack
| Layer | Technology |
|---|---|
| Mobile UI | React Native |
| Development | Expo |
| Language | TypeScript / JavaScript |
| State | React Hooks |
| Styling | React Native StyleSheet |

## Features
| Feature | Status |
|---|---|
| Dashboard summary | Implemented |
| Order search | Implemented |
| Status filters | Implemented |
| Order details | Implemented |
| Status updates | Implemented (in-memory only) |
| Backend/API, database, authentication | Not connected / not implemented |

See [Documentation Index](./docs/README.md).
