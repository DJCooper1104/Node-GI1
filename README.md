# Node-GI1

This repository contains multiple Node.js applications developed as part of the Node.js Developer Course. Each application is organized into its respective directory.

## Applications

### 1. Hosted Weather App

A Node.js application that provides weather information based on user input.

**Features:**
- Fetches real-time weather data.
- Interactive command-line interface.

**Usage:**
1. Navigate to the `Hosted-Weather-App` directory.
2. Install dependencies: `npm install`
3. Run the application: `node app.js`

### 2. Language Detection Code

A Node.js script that detects the language of a given text input.

**Features:**
- Identifies the language of the provided text.
- Supports multiple languages.

**Usage:**
1. Navigate to the `Language-Detection-Code` directory.
2. Install dependencies: `npm install`
3. Run the script: `node detectLanguage.js "Your text here"`

### 3. Notes Taking App

A command-line application for managing personal notes.

**Features:**
- Add, remove, list, and read notes.
- Stores notes in a JSON file for persistence.

**Usage:**
1. Navigate to the `Notes-Taking-App` directory.
2. Install dependencies: `npm install`
3. Add a new note: `node app.js add --title="Note Title" --body="Note Body"`
4. Remove a note: `node app.js remove --title="Note Title"`
5. List all notes: `node app.js list`
6. Read a note: `node app.js read --title="Note Title"`

