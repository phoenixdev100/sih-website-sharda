# 🤝 Contributing to Sharda University Internal Hackathon 2026

Thank you for your interest in contributing to the Sharda University Internal Hackathon 2026 platform! We welcome contributions from students, faculty, and the broader community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Guidelines](#development-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Community](#community)

## 📜 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git
- Basic knowledge of React, JavaScript, and Tailwind CSS

### Setting Up Development Environment

1. **Fork the repository**

   ```bash
   git clone https://github.com/phoenixdev100/sih-website-sharda.git
   cd sih-website-sharda
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
   ```
   http://localhost:5173
   ```

## 🛠️ How to Contribute

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug fixes** - Help us identify and fix issues
- ✨ **New features** - Add functionality that benefits users
- 📝 **Documentation** - Improve or add documentation
- 🎨 **UI/UX improvements** - Enhance user experience
- 🔧 **Performance optimizations** - Make the platform faster
- 🧪 **Testing** - Add or improve test coverage
- 🌐 **Accessibility** - Make the platform more accessible

### Areas for Contribution

#### 🎯 High Priority Areas

- **Mobile responsiveness improvements**
- **Accessibility enhancements (WCAG compliance)**
- **Performance optimizations**
- **SEO improvements**
- **Form validation enhancements**

#### 🔧 Technical Improvements

- **Component refactoring**
- **Code splitting and lazy loading**
- **Error boundary implementations**
- **API integration optimizations**
- **Build process improvements**

#### 🎨 Design & UX

- **Animation and micro-interactions**
- **Loading states and skeletons**
- **Dark mode implementation**
- **Print-friendly styles**
- **Better error messages**

## 📋 Development Guidelines

### Code Style

We follow these coding standards:

#### JavaScript/React

- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Prefer const over let, avoid var

```jsx
// ✅ Good
const TeamRegistration = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = useCallback(
    (data) => {
      // Handle form submission
      onSubmit(data);
    },
    [onSubmit],
  );

  return <form onSubmit={handleSubmit}>{/* Form content */}</form>;
};

// ❌ Avoid
function teamRegistration(props) {
  var data = {};
  // ...
}
```

#### CSS/Tailwind

- Use Tailwind utility classes
- Follow mobile-first responsive design
- Use semantic class names for custom CSS
- Maintain consistent spacing and typography

```jsx
// ✅ Good
<div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Title</h2>
</div>

// ❌ Avoid
<div style={{backgroundColor: 'white', padding: '16px'}}>
  <h2 style={{fontSize: '24px', fontWeight: 'bold'}}>Title</h2>
</div>
```

### File Structure

- Place components in appropriate directories
- Use PascalCase for component files
- Use camelCase for utility functions
- Keep components small and focused

```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── forms/           # Form-specific components
│   └── ui/              # UI elements
├── pages/               # Page components
├── hooks/               # Custom hooks
├── utils/               # Utility functions
└── constants/           # App constants
```

### Responsive Design

All components must be responsive and work across devices:

```jsx
// Use responsive Tailwind classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
  <div className="p-4 sm:p-6 text-sm sm:text-base">Content</div>
</div>
```

### Accessibility

Ensure your contributions are accessible:

- Use semantic HTML elements
- Add proper ARIA labels
- Ensure keyboard navigation works
- Maintain good color contrast
- Add alt text for images

```jsx
// ✅ Accessible
<button
  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  aria-label="Submit registration form"
  onClick={handleSubmit}
>
  Submit
</button>

// ❌ Not accessible
<div onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2">
  Submit
</div>
```

## 🔄 Pull Request Process

### Before Submitting

1. **Check existing issues** - Look for related issues or discussions
2. **Create an issue** - For new features, create an issue first
3. **Fork and branch** - Create a feature branch from main
4. **Test thoroughly** - Ensure your changes work across devices
5. **Follow conventions** - Use our coding standards

### Branch Naming

Use descriptive branch names:

```bash
# Feature branches
feature/mobile-responsive-header
feature/dark-mode-support
feature/registration-validation

# Bug fix branches
fix/contact-form-submission
fix/mobile-navigation-bug
fix/accessibility-issues

# Documentation branches
docs/contributing-guidelines
docs/api-documentation
```

### Commit Messages

Write clear, descriptive commit messages:

```bash
# ✅ Good
git commit -m "feat: add mobile-responsive navigation menu"
git commit -m "fix: resolve form validation error on registration page"
git commit -m "docs: update installation instructions in README"

# ❌ Avoid
git commit -m "fixed stuff"
git commit -m "updates"
git commit -m "wip"
```

### Pull Request Template

When submitting a PR, include:

```markdown
## Description

Brief description of changes made

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Refactoring

## Testing

- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested on tablet
- [ ] Cross-browser testing completed

## Screenshots (if applicable)

Add screenshots showing the changes

## Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings or errors
```

### Review Process

1. **Automated checks** - All CI checks must pass
2. **Code review** - At least one maintainer review required
3. **Testing** - Manual testing on different devices
4. **Approval** - Maintainer approval before merge

## 🐛 Issue Reporting

### Bug Reports

When reporting bugs, include:

- **Clear title** - Descriptive summary of the issue
- **Steps to reproduce** - Detailed steps to recreate the bug
- **Expected behavior** - What should happen
- **Actual behavior** - What actually happens
- **Environment** - Browser, device, screen size
- **Screenshots** - Visual evidence of the issue

### Feature Requests

For new features, include:

- **Problem statement** - What problem does this solve?
- **Proposed solution** - How should it work?
- **Alternatives considered** - Other approaches you've thought of
- **Additional context** - Any other relevant information

### Issue Labels

We use these labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or improvement
- `documentation` - Documentation needs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `priority: high` - Critical issues
- `priority: medium` - Important issues
- `priority: low` - Nice to have

## 🎯 Specific Contribution Areas

### 📱 Mobile Responsiveness

Help improve mobile experience:

- Test on various screen sizes
- Optimize touch interactions
- Improve mobile navigation
- Enhance form usability on mobile

### ♿ Accessibility

Make the platform accessible to everyone:

- Add ARIA labels and roles
- Improve keyboard navigation
- Ensure color contrast compliance
- Add screen reader support

### 🚀 Performance

Optimize platform performance:

- Implement code splitting
- Optimize images and assets
- Reduce bundle size
- Improve loading times

### 🧪 Testing

Add comprehensive testing:

- Unit tests for components
- Integration tests for forms
- E2E tests for user flows
- Accessibility testing

## 🌟 Recognition

Contributors will be recognized in:

- **README.md** - Listed in contributors section
- **Release notes** - Mentioned in version releases
- **Hall of Fame** - Special recognition for significant contributions

## 📞 Community & Support

### Getting Help

- **GitHub Discussions** - For questions and discussions
- **Issues** - For bug reports and feature requests
- **Email** - Contact maintainers directly

### Communication Channels

- **GitHub Issues** - Primary communication
- **Pull Request Comments** - Code-specific discussions
- **Email** - Direct contact with maintainers

### Maintainers

Current project maintainers:

- **Deepak** - [@phoenixdev100](https://github.com/phoenixdev100)
  - 📧 support@phoenixdev100.tech

## 📚 Resources

### Learning Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Tools

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 🙏 Thank You

Thank you for contributing to the Sharda University Internal Hackathon 2026 platform! Your contributions help create a better experience for all participants and make the hackathon more successful.

Every contribution, no matter how small, is valuable and appreciated. Together, we're building something amazing! 🚀

---

**Happy Contributing! 🎉**
