# Nextra Development Guide

## Architecture Overview

Nextra is a Next.js-based static site generator that transforms MDX files into documentation websites. The codebase follows a monorepo structure with pnpm workspaces and Turborepo orchestration.

### Core Components
- **`packages/nextra`**: Core MDX processing engine with server-side compilation and client components
- **`packages/nextra-theme-docs`**: Documentation theme with layout, navigation, and search
- **`packages/nextra-theme-blog`**: Blog theme variant
- **`examples/`**: Reference implementations showing different configurations
- **`docs/`**: Main documentation site using nextra-theme-docs

### Data Flow
1. **Server**: MDX files → Nextra loader → Compiled React components + page map metadata
2. **Client**: Theme layouts render page map into navigation + content areas
3. **Build**: Turborepo coordinates package builds with dependency ordering

## Development Workflows

### Building Packages
```bash
# Build all packages
pnpm build

# Build specific package (triggers dependent rebuilds)
pnpm --filter nextra build
pnpm --filter nextra-theme-docs build

# Development with watch mode
pnpm --filter nextra dev
```

### Running Examples
```bash
# Run docs example (most common for testing)
pnpm --filter example-docs dev

# Run blog example
pnpm --filter example-blog dev

# Run with specific port
pnpm --filter example-docs dev --port 3001
```

### Testing & Quality
```bash
# Run all tests
pnpm test

# Type checking
pnpm types:check

# Linting (uses flat config)
pnpm lint

# Formatting
pnpm prettier
```

## Key Conventions

### Configuration Validation
Use Zod schemas for all configuration objects. Example from `packages/nextra-theme-docs/src/schemas.tsx`:
```typescript
export const LayoutPropsSchema = z.object({
  navbar: z.object({...}).optional(),
  footer: z.object({...}).optional(),
  // ...
})
```

### Component Patterns
- **Headless UI**: All interactive components use `@headlessui/react` for accessibility
- **clsx**: Conditional CSS classes use `cn()` from clsx
- **Client Components**: Mark with `'use client'` directive when needed
- **Type Safety**: Strict TypeScript with generated types from Zod schemas

### File Organization
- **Server code**: `packages/nextra/src/server/` - MDX compilation, webpack integration
- **Client code**: `packages/nextra/src/client/` - React components, hooks, utilities
- **Themes**: Separate packages with layout components and stores
- **Examples**: Complete Next.js apps showing integration patterns

### Build Integration
- **Webpack Loader**: `packages/nextra/loader.cjs` integrates with Next.js build pipeline
- **Page Map**: Auto-generated navigation structure from file system
- **Git Integration**: Automatic last-modified timestamps (requires non-shallow clone)
- **Search Index**: Post-build generation using pagefind

### Dependency Management
- **Patches**: Custom patches in `patches/` for esbuild, Next.js, and other deps
- **Overrides**: Version pinning in root `package.json` for critical dependencies
- **Workspaces**: pnpm workspace protocol (`"workspace:*"`) for local packages

## Common Patterns

### Adding Components
1. Create in appropriate theme package (`packages/nextra-theme-docs/src/components/`)
2. Export from theme's `index.ts`
3. Use Headless UI + clsx for styling
4. Add TypeScript types with Zod validation if configurable

### MDX Processing
- **Plugins**: Custom remark/rehype plugins in `packages/nextra/src/server/remark-plugins/`
- **Twoslash**: TypeScript code samples with type hints
- **Frontmatter**: Auto-extracted and validated against schemas

### Theme Configuration
Themes accept configuration objects validated by Zod schemas. Example:
```typescript
const withNextra = nextra({
  search: { codeblocks: false },
  contentDirBasePath: '/docs'
})
```

## Debugging Tips

- **Build Issues**: Check Turborepo cache with `pnpm clean` then rebuild
- **Theme Development**: Run example apps to test changes locally
- **Type Errors**: Generated types in `types.generated.ts` may need regeneration
- **Git Warnings**: Ensure non-shallow clone for last-modified timestamps

## File Reference Patterns

- `packages/nextra/src/server/loader.ts` - Next.js webpack integration
- `packages/nextra-theme-docs/src/layout.tsx` - Main theme layout component
- `packages/nextra/src/client/components/` - Reusable UI components
- `examples/docs/next.config.mjs` - Basic Nextra configuration
- `turbo.json` - Build pipeline configuration