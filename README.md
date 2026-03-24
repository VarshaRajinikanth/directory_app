# Directory App

This project is a modern Angular 18 application built to display a clean, dynamic directory of users fetched from a public API. It features RxJS-powered reactive search, routing, and a stunning glassmorphism design.

## Features
- **Angular 18 & TypeScript**: State of the art Angular framework with standalone components.
- **RxJS Reactive Search**: The user search box utilizes `debounceTime` and `distinctUntilChanged` to optimize UI updates.
- **Routing**: Detail view using Angular router `id` parameter.
- **Error Handling**: Graceful fallback UI for network failures or invalid user IDs.

## Setup Instructions

1. Ensure you have Node.js 18+ installed on your system.
2. Run `npm install` at the project root to download dependencies.
3. Run `npm run start` or `npx ng serve` to begin the development server.
4. Navigate to `http://localhost:4200/` in your browser.

## Built With
- Angular 18
- SCSS
- JSONPlaceholder Public API
