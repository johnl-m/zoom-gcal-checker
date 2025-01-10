# Zoom Link Checker

## Overview

Zoom Link Checker is a Chrome extension that ensures a Zoom link is added to events in Google Calendar. If a Zoom link is not detected when saving an event, the extension will alert the user.

The code is not optimal and could definitely be improved.

## Features

- Automatically checks for a Zoom link when saving an event in Google Calendar.
- Alerts the user if no Zoom link is detected.

## Installation

1. Clone the repository or download the source code.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable \`Developer mode\` by toggling the switch in the top right corner.
4. Click on \`Load unpacked\` and select the directory containing the extension's source code.

## Usage

1. Navigate to Google Calendar.
2. Create or edit an event.
3. Click the \`Save\` button.
4. If no Zoom link is detected, an alert will notify you to add one.

## Files

- \`content.js\`: Contains the main logic for checking the presence of a Zoom link.
- \`manifest.json\`: Defines the extension's metadata and permissions.
- \`README.md\`: Provides an overview and instructions for the project.

## Permissions

- \`activeTab\`: Allows the extension to access the currently active tab.
- \`https://calendar.google.com/*\`: Grants the extension access to Google Calendar.

## License

This project is licensed under the MIT License. See the LICENSE file for details.