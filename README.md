# ClaimRadar Landing Page




A modern, responsive landing page for ClaimRadar - a browser extension for agentic misinformation detection. Built with React, TypeScript, and Vite.

![ClaimRadar Landing Page](https://img.shields.io/badge/React-19.1.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF)

## 🚀 Features

- **Modern Design**: Beautiful gradient background with glassmorphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth hover animations and transitions
- **Extension Preview**: Live mockup of the browser extension interface
- **Feature Showcase**: Clean grid layout highlighting key features
- **Accessibility**: Built with accessibility best practices

## 🎨 Design Highlights

- **Gradient Background**: Soft, abstract gradient inspired by modern design trends
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Typography**: Clean Inter font family for excellent readability
- **Color Scheme**: Professional blue and white palette with accent colors
- **Animations**: Subtle hover effects and smooth transitions

## 🛠️ Tech Stack

- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 7.1.7** - Fast build tool and dev server
- **CSS3** - Modern CSS with gradients, backdrop-filter, and animations
- **ESLint** - Code quality and consistency

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ClaimRadar_landing_pages/claimradar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the landing page

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 📁 Project Structure

```
claimradar/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.tsx          # Main application component
│   ├── App.css          # Component-specific styles
│   ├── index.css        # Global styles and CSS variables
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## 🎯 Key Components

### Header
- **Logo**: ClaimRadar branding with gradient logo
- **Navigation**: Features, How it works, Download links
- **CTA Button**: "Add to Chrome" call-to-action

### Main Content
- **Left Section**: 
  - Hero headline with gradient text
  - Product description
  - Primary and secondary CTA buttons
  - Feature grid (2x2 layout)
- **Right Section**:
  - Extension preview mockup
  - Misinformation details card
  - Interactive demonstration

### Features Grid
- **Real-time analysis**: Instant claim scanning
- **Evidence links**: Source verification and confidence scores
- **Privacy-first**: Local processing with minimal telemetry
- **Community feedback**: User-driven improvements

## 🎨 Customization

### Colors
The design uses CSS custom properties for easy color customization:

```css
:root {
  --primary-blue: #3b82f6;
  --primary-dark: #1d4ed8;
  --text-primary: #1A1A1A;
  --text-secondary: #6B7280;
  --background-gradient: linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%);
}
```

### Typography
The project uses Inter font family with multiple weights:
- Regular (400)
- Medium (500)
- Semi-bold (600)
- Bold (700)

### Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🔧 Development

### Code Quality
- **ESLint**: Configured with TypeScript and React rules
- **TypeScript**: Strict type checking enabled
- **Prettier**: Code formatting (recommended)

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Responsive Design

The landing page is fully responsive with:
- **Mobile-first approach**
- **Flexible grid layouts**
- **Scalable typography**
- **Touch-friendly interactions**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- React and Vite communities for excellent tooling
- Inter font family by Rasmus Andersson

---

**Built with ❤️ for ClaimRadar**
