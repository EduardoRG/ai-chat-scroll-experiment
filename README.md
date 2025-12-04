# Chat UX Scaffolding

## Project Overview

This is a React + TypeScript + Vite application exploring AI user experience patterns. The app uses Redux Toolkit for state management, Tailwind CSS for styling, and Motion for animations.

## Architecture & Organization

### Feature-Based Structure

- Follow the existing `src/features/` pattern for major functionality
- Each feature contains its own `components/`, Redux slice, and type definitions
- Example: `src/features/thread/` contains Thread components, `threadSlice.ts`, and `types.ts`

### Redux Patterns

- Use Redux Toolkit with typed hooks from `src/hooks.ts`
- Slice pattern: `createSlice` with typed actions and selectors
- **Important**: New slices must be manually added to the store reducer in `src/store.ts`
- Example from `messagesSlice.ts`: Export both actions and typed selectors

```typescript
export const { addMessage, setLoading } = messagesSlice.actions;
export const selectMessages = (state: RootState) => state.messages.messages;
```

### Component Conventions

- Use named exports for components: `export const ComponentName = () => {}`
- Feature components live in `src/features/[feature]/components/`
- Shared components would go in `src/components/`

## Key Dependencies & Patterns

### Styling

- **Tailwind CSS v4** with Vite plugin (not PostCSS)

### State Management

- Redux Toolkit with TypeScript
- Typed hooks: `useDispatch()` and `useSelector()` from `src/hooks.ts`
- State slices follow domain boundaries (e.g., messages for thread feature)

### Development

- Vite dev server: `npm run dev`
- ESLint with Landbot's TypeScript React config

## Common Tasks

### Adding New Features

1. Create feature directory: `src/features/[feature-name]/`
2. Add components, slice, and types subdirectories/files
3. **Remember**: Add new slice to `src/store.ts` reducer configuration
4. Use typed hooks from `src/hooks.ts` for state access

### Styling Components

- Use existing Tailwind patterns with dark mode support
- Maintain responsive design with Tailwind breakpoints and viewport units (`svh`)

### Redux State Updates

- Use `createSlice` with PayloadAction types
- Export both actions and typed selectors
