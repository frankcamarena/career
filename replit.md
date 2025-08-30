# Overview

This is a full-stack web application built with React and Express.js, featuring a modern UI built with shadcn/ui components and Tailwind CSS. The project appears to be a personal portfolio website showcasing data analytics projects and professional experience. The application follows a monorepo structure with shared schema definitions and type-safe database operations using Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the client-side application
- **Vite** as the build tool and development server with hot module replacement
- **Wouter** for client-side routing instead of React Router
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **TanStack Query** for server state management and API data fetching
- **React Hook Form** with Zod validation for form handling

## Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **ESM modules** throughout the application for modern JavaScript standards
- **Structured routing** with separation of concerns between route handlers and business logic
- **Storage abstraction layer** with interface-based design allowing for different storage implementations
- **Session-based architecture** prepared with PostgreSQL session storage

## Data Layer
- **Drizzle ORM** for type-safe database operations and schema management
- **PostgreSQL** as the primary database with Neon serverless database integration
- **Zod schemas** for runtime type validation derived from database schema
- **Database migrations** managed through Drizzle Kit
- **Shared schema definitions** between client and server for type consistency

## Development Tooling
- **TypeScript** with strict configuration for type safety across the full stack
- **ESLint and Prettier** integration through shadcn/ui configuration
- **Path aliases** configured for clean imports (@/, @shared/, @assets/)
- **Replit integration** with development banner and error overlay plugins

## Authentication & Session Management
- **Session-based authentication** infrastructure prepared with connect-pg-simple
- **User management** with username/password authentication schema
- **Memory storage fallback** for development and testing scenarios

## UI/UX Design System
- **Design tokens** implemented through CSS custom properties
- **Dark mode support** built into the Tailwind configuration
- **Responsive design** with mobile-first approach
- **Accessibility-first** components through Radix UI primitives
- **Custom color palette** with professional blue/neutral theme

# External Dependencies

## Database & Storage
- **Neon Database** - Serverless PostgreSQL database provider
- **Drizzle ORM** - Type-safe database toolkit and query builder
- **connect-pg-simple** - PostgreSQL session store for Express sessions

## UI & Styling
- **Radix UI** - Comprehensive suite of accessible UI primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library for consistent iconography
- **shadcn/ui** - Pre-built component library built on Radix UI

## Development & Build Tools
- **Vite** - Fast build tool and development server
- **TypeScript** - Static type checking and enhanced developer experience
- **Replit** - Cloud development environment with specialized plugins

## Frontend Libraries
- **TanStack Query** - Powerful data synchronization for React
- **Wouter** - Minimalist client-side routing
- **React Hook Form** - Performant forms with easy validation
- **date-fns** - Date utility library for formatting and manipulation

## Validation & Types
- **Zod** - TypeScript-first schema validation
- **class-variance-authority** - Utility for conditional CSS class names
- **clsx** - Utility for constructing className strings conditionally