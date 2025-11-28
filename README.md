# react-mobile-warning

[English](README.md) | [한국어](README.ko.md)

![npm version](https://img.shields.io/npm/v/react-mobile-warning.svg)
![npm downloads](https://img.shields.io/npm/dm/react-mobile-warning.svg)
![license](https://img.shields.io/npm/l/react-mobile-warning.svg)

A React component that displays a warning modal when accessed from mobile devices or small screens.

## Installation

```bash
npm install react-mobile-warning
```

or

```bash
yarn add react-mobile-warning
```

or

```bash
pnpm add react-mobile-warning
```

## Usage

### Basic Usage

```tsx
import MobileWarning from 'react-mobile-warning';

function App() {
  return (
    <>
      <MobileWarning />
      {/* Your app content */}
    </>
  );
}
```

### Using Named Export

```tsx
import { MobileWarning } from 'react-mobile-warning';

function App() {
  return (
    <>
      <MobileWarning />
      {/* Your app content */}
    </>
  );
}
```

### Custom Configuration

```tsx
import MobileWarning from 'react-mobile-warning';

function App() {
  return (
    <>
      <MobileWarning
        minWidth={1200}
        minHeight={800}
        title="Desktop Only"
        message="This application requires a desktop computer."
        tip="Please use a desktop browser for the best experience."
      />
      {/* Your app content */}
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `language` | `'en' \| 'ko' \| 'ja' \| 'zh' \| 'es' \| 'fr' \| 'de' \| null` | `auto-detected` | Language code for translations. If not provided, automatically detects from browser language. Set to `null` to use English. |
| `minWidth` | `number` | `1024` | Minimum screen width in pixels. Screens smaller than this will be considered mobile. |
| `minHeight` | `number` | `600` | Minimum screen height in pixels. Screens smaller than this will be considered mobile. |
| `title` | `string` | - | Modal title text (overrides language setting). |
| `message` | `string` | - | Main message text (overrides language setting). Supports newlines with `\n`. |
| `tip` | `string` | - | Tip message text (overrides language setting). Supports newlines with `\n`. |
| `className` | `string` | - | Custom class name for the root element. |
| `overlayClassName` | `string` | - | Custom class name for the overlay background. |
| `modalClassName` | `string` | - | Custom class name for the modal container. |

## Supported Languages

- `en` - English (default)
- `ko` - Korean
- `ja` - Japanese
- `zh` - Chinese
- `es` - Spanish
- `fr` - French
- `de` - German

## Examples

### Auto-detect Browser Language (Default)

```tsx
import MobileWarning from 'react-mobile-warning';

function App() {
  return (
    <>
      <MobileWarning />
      {/* Automatically uses browser language */}
    </>
  );
}
```

### Using Language Code

```tsx
import MobileWarning from 'react-mobile-warning';

function App() {
  return (
    <>
      <MobileWarning language="ko" />
      {/* Force Korean version */}
    </>
  );
}
```

### Disable Auto-detection

```tsx
import MobileWarning from 'react-mobile-warning';

function App() {
  return (
    <>
      <MobileWarning language={null} />
      {/* Always uses English */}
    </>
  );
}
```

### Custom Messages

```tsx
import MobileWarning from 'react-mobile-warning';

function App() {
  return (
    <>
      <MobileWarning
        language="en"
        title="Desktop Only"
        message="This application requires a desktop computer."
        tip="Please use a desktop browser."
      />
    </>
  );
}
```

## Requirements

- React 16.8.0 or higher
- React DOM 16.8.0 or higher
- Tailwind CSS (for styling) - Optional if using custom styles

## Styling

This component uses Tailwind CSS classes. Make sure your project has Tailwind CSS configured.

If you're not using Tailwind CSS, you can override the styles using the `className`, `overlayClassName`, and `modalClassName` props.

### Without Tailwind CSS

If you don't use Tailwind CSS, you can provide your own styles:

```tsx
import MobileWarning from 'react-mobile-warning';
import './custom-styles.css';

function App() {
  return (
    <MobileWarning
      className="custom-overlay"
      overlayClassName="custom-overlay-bg"
      modalClassName="custom-modal"
    />
  );
}
```

## Changelog

### 1.0.1
- Fixed React externalization issue that caused `ReactCurrentDispatcher` error
- Improved build configuration to properly externalize React and JSX runtime

### 1.0.0
- Initial release

## License

MIT

## Author

Glacier Han

