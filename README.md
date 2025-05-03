# 🚀 Next.js CMS Project

A modern Content Management System built with Next.js 15, React 19, and TypeScript, featuring a robust UI component library and internationalization support.

## ✨ Features

- 🎨 Modern UI components with Radix UI
- 🌐 Internationalization support
- 📝 Form validation with Zod
- 📱 Responsive design with TailwindCSS
- 🔒 Type-safe development with TypeScript
- ⚡ Efficient data fetching with React Query
- 📤 File upload capabilities with React Dropzone

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Framework | Next.js 15.2.4 |
| Language | TypeScript |
| UI Components | Radix UI, TailwindCSS |
| State Management | React Query |
| Form Handling | React Hook Form with Zod validation |
| Internationalization | i18next |
| Styling | TailwindCSS with custom animations |
| API Client | Axios |
| Utilities | Lodash, Dayjs |

## 📁 Project Structure

```bash
├── src/                 # Source code
│   ├── app/            # Next.js app directory
│   │   ├── [locale]/   # Internationalized routes
│   │   │   ├── (auth)/ # Authentication routes
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   └── forgot-password/
│   │   │   └── (cms)/  # CMS routes
│   │   │       ├── dashboard/
│   │   │       ├── users/
│   │   │       ├── settings/
│   │   │       └── ...
│   │   ├── globals.css # Global styles
│   │   ├── providers.tsx # App providers
│   │   └── favicon.ico # App icon
│   ├── components/     # Reusable UI components
│   ├── containers/     # Page containers/layouts
│   ├── contexts/       # React contexts
│   ├── hooks/          # Custom React hooks
│   ├── libs/           # Third-party library configurations
│   ├── locales/        # Translation files
│   ├── models/         # Data models/interfaces
│   ├── schemas/        # Zod validation schemas
│   ├── services/       # API services
│   ├── utils/          # Utility functions
│   ├── constants/      # App constants
│   ├── configs/        # App configurations
│   ├── i18nConfig.ts   # i18n configuration
│   └── middleware.ts   # Next.js middleware
├── public/             # Static assets
├── .next/             # Next.js build output
├── node_modules/      # Dependencies
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── next.config.ts     # Next.js configuration
├── postcss.config.mjs # PostCSS configuration
└── eslint.config.mjs  # ESLint configuration
```

## 📦 Source Code Structure

### `src/app/` 📱
- Contains the main application routes and layouts
- Uses Next.js 13+ App Router
- Supports internationalization with `[locale]` dynamic routing

### `src/app/[locale]/` 🌐
- Handles internationalized routes
- Contains two main route groups:
  - `(auth)/`: Authentication-related routes
    - `login/`: User login page
    - `register/`: User registration page
    - `forgot-password/`: Password recovery page
  - `(cms)/`: CMS management routes
    - `dashboard/`: Main dashboard page
    - `users/`: User management section
    - `settings/`: System settings
    - Other CMS-specific routes

### `src/components/` 🧩
- Reusable UI components
- Follows atomic design principles
- Includes shared components like buttons, forms, modals, etc.

### `src/containers/` 📦
- Page-level components and layouts
- Handles page-specific logic and state management
- Integrates multiple components into complete pages

### `src/contexts/` 🔄
- React context providers
- Manages global application state
- Handles theme, authentication, and other shared states

### `src/hooks/` 🎣
- Custom React hooks
- Reusable logic for components
- Includes hooks for data fetching, form handling, etc.

### `src/libs/` 📚
- Third-party library configurations
- Custom implementations of external libraries
- Integration setups

### `src/locales/` 🌍
- Internationalization files
- Translation strings for different languages
- i18n configuration

### `src/models/` 📊
- TypeScript interfaces and types
- Data models for API responses
- Shared type definitions

### `src/schemas/` 📝
- Zod validation schemas
- Form validation rules
- API request/response validation

### `src/services/` 🔌
- API service functions
- HTTP client configurations
- API endpoint definitions

### `src/utils/` 🛠️
- Helper functions
- Common utilities
- Shared business logic

### `src/constants/` ⚙️
- Application constants
- Configuration values
- Static data

### `src/configs/` ⚡
- Environment configurations
- Feature flags
- App settings

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- Yarn package manager

### Installation

1. Clone your forked repository:
```bash
git clone [https://github.com/dennis-nguyen0909/next-base-code.git]
```

2. Install dependencies:
```bash
yarn install
```

### Development

Start the development server:

```bash
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Build

To create a production build:

```bash
yarn build
```

### Start Production Server

```bash
yarn start
```

### Linting

Run the linter to check for code quality:

```bash
yarn lint
```

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
