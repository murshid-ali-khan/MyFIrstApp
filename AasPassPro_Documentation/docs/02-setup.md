# 02 — Setup Guide

## 1. Introduction

This guide explains how to install, configure, and run the MyFirstApp project locally.

The application is built using React Native, Expo SDK 58, and TypeScript.

## 2. System Requirements

The following tools are required:

- Windows 10 or Windows 11
- Node.js
- npm (Node Package Manager)
- Visual Studio Code
- Expo Go (for compatible mobile testing)
- Android device or Android Emulator (optional)

## 3. Check Node.js and npm

Open PowerShell or the VS Code terminal.

Check Node.js:

```bash
node -v
```

Check npm:

```bash
npm -v
```

Make sure both commands return version numbers.

## 4. Open the Project

1. Open Visual Studio Code.
2. Select File → Open Folder.
3. Select the `MyFirstApp` project folder.
4. Open the integrated terminal.

Make sure the terminal is inside the folder containing `package.json`.

## 5. Install Dependencies

Run:

```bash
npm install
```

This command installs the dependencies listed in `package.json`.

Wait until the installation is complete.

## 6. Start the Development Server

Run:

```bash
npx expo start --clear
```

Expo starts the development server and displays a QR code in the terminal.

## 7. Run the Application

### Option A — Physical Android Device

1. Install Expo Go on your Android device.
2. Connect your computer and mobile device to the same Wi-Fi network.
3. Start the Expo development server.
4. Scan the QR code using Expo Go.

### Option B — Android Emulator

1. Install and configure Android Studio.
2. Start an Android emulator.
3. Run the Expo development server.
4. Press `a` in the terminal to open the app in the Android emulator.

**Note:** Expo Go compatibility depends on the installed Expo SDK and the native modules used by the project.

## 8. Troubleshooting

### Problem: package.json not found

Solution:

Move the terminal into the `MyFirstApp` project folder.

### Problem: Dependencies are missing

Solution:

Run:

```bash
npm install
```

### Problem: Expo server has cache issues

Solution:

Stop the development server using:

```bash
Ctrl + C
```

Then restart:

```bash
npx expo start --clear
```

### Problem: QR code does not connect

- Check that both devices are connected to the same Wi-Fi network.
- Restart the Expo development server.
- Check firewall and network settings.

## 9. Important Notes

- Always run Expo commands from the project root directory.
- Do not run installation commands from the parent folder.
- Keep dependencies consistent with `package.json`.
- Do not delete project configuration files without checking their purpose.

## 10. Conclusion

This guide provides the basic instructions required to install dependencies, start the Expo development server, and run MyFirstApp locally.

**Documentation Version:** v0.1 Draft