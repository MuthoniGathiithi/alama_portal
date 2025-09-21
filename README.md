# Alama Portal

A modern Next.js application for the Alama Portal with a beautiful login interface and comprehensive dashboard system.

## Features

- **Modern Login Interface**: Clean, minimalist design with dodger blue accents
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dashboard System**: Complete navigation with sidebar and multiple pages
- **Countries Management**: Full CRUD operations for country data
- **Password Visibility Toggle**: Enhanced user experience with eye icon toggle
- **Focus States**: Subtle animations and focus indicators

## Getting Started

### Development

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

To build for production:

```bash
npm run build
npm start
```

## Deployment

### Deploy to Render

This project is configured for easy deployment to Render using GitHub integration.

1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository
2. **Connect to Render**: 
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
3. **Auto-Deploy**: Render will automatically detect the `render.yaml` configuration and deploy your app

The `render.yaml` file includes:
- Node.js 18 environment
- Automatic build and start commands
- Free tier configuration

### Manual Deployment Steps

If deploying manually:
1. Set Node.js version to 18
2. Build command: `npm install && npm run build`
3. Start command: `npm start`
4. Ensure all environment variables are configured

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── countries/         # Countries management pages
│   ├── dashboard/         # Dashboard page
│   └── page.tsx          # Login page
├── components/            # Reusable components
│   ├── ElevatedCard.tsx  # Login form component
│   └── Sidebar.tsx       # Navigation sidebar
└── contexts/              # React contexts
    └── CountriesContext.tsx
```

## Design System

- **Primary Color**: Dodger Blue (#1E90FF)
- **Typography**: Geist font family
- **Components**: Modern, minimalist design with subtle animations
- **Icons**: Consistent SVG icons throughout the application

## Technologies Used

- **Next.js 15.5.3**: React framework with app router
- **React 19.1.0**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Utility-first CSS framework
- **Node.js 18**: Runtime environment
