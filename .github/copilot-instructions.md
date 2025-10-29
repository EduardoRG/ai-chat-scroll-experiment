# Project Overview

This project is a web application that allows users to interact with an AI assistant through a chat interface. The application is built using modern web technologies and follows best practices for state management, styling, and component organization. It uses React + TypeScript + Vite. Redux Toolkit for state management, Tailwind CSS for styling, and Motion for animations.

## Folder Structure

- `src/features/`: Contains feature-based components, Redux slices, and types.
- `src/hooks.ts`: Typed hooks for Redux.
- `src/store.ts`: Redux store configuration.
- `src/components/`: Shared components (currently empty).
- `public/`: Static assets.

## Libraries and Frameworks

- React and Tailwind CSS for UI development.
- Redux Toolkit for state management.
- Vite for development and build tooling.
- Motion for animations.
- ESLint with Landbot's TypeScript React config for code quality.

## Coding Standards

- Use named exports for components.
- Use functional components as arrow functions.
- No index files in component folders.

## UI guidelines

- Tailwind CSS with dark mode support.
- Chat interface shows minimal information: author, content, timestamp.
