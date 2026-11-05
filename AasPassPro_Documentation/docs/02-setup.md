# 02 — Setup Guide

## Requirements
- Node.js and npm
- Visual Studio Code
- Expo Go on a mobile device

## Install and Run
1. Open the `MyFirstApp` folder in VS Code.
2. Open the terminal in the folder containing `package.json`.
3. Install packages if needed:
   ```bash
   npm install
   ```
4. Start Expo:
   ```bash
   npx expo start --clear
   ```
5. Scan the QR code using Expo Go.

## Troubleshooting
- If `package.json` is not found, move the terminal into `MyFirstApp`.
- Run Expo commands from the project folder, not its parent.
- To restart, press **Ctrl+C** as a keyboard shortcut, then run `npx expo start --clear`.
