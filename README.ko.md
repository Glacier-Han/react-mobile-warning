# react-mobile-warning

[English](README.md) | [한국어](README.ko.md)

![npm version](https://img.shields.io/npm/v/react-mobile-warning.svg)
![npm downloads](https://img.shields.io/npm/dm/react-mobile-warning.svg)
![license](https://img.shields.io/npm/l/react-mobile-warning.svg)

모바일 기기나 작은 화면에서 접근할 때 경고 모달을 표시하는 React 컴포넌트입니다.

## 설치

```bash
npm install react-mobile-warning
```

또는

```bash
yarn add react-mobile-warning
```

또는

```bash
pnpm add react-mobile-warning
```

## 사용법

### 기본 사용법

```tsx
import MobileWarning from 'react-mobile-warning';

function App() {
  return (
    <>
      <MobileWarning />
      {/* 앱 콘텐츠 */}
    </>
  );
}
```

### 커스텀 설정

```tsx
import MobileWarning from 'react-mobile-warning';

function App() {
  return (
    <>
      <MobileWarning
        minWidth={1200}
        minHeight={800}
        title="데스크톱 전용"
        message="이 애플리케이션은 데스크톱 컴퓨터가 필요합니다."
        tip="최상의 경험을 위해 데스크톱 브라우저를 사용해주세요."
      />
      {/* 앱 콘텐츠 */}
    </>
  );
}
```

## Props

| Prop | Type | Default | 설명 |
|------|------|---------|------|
| `language` | `'en' \| 'ko' \| 'ja' \| 'zh' \| 'es' \| 'fr' \| 'de' \| null` | `자동 감지` | 번역을 위한 언어 코드. 제공하지 않으면 브라우저 언어를 자동으로 감지합니다. `null`로 설정하면 영어를 사용합니다. |
| `minWidth` | `number` | `1024` | 최소 화면 너비(픽셀). 이보다 작은 화면은 모바일로 간주됩니다. |
| `minHeight` | `number` | `600` | 최소 화면 높이(픽셀). 이보다 작은 화면은 모바일로 간주됩니다. |
| `title` | `string` | - | 모달 제목 텍스트 (언어 설정을 덮어씁니다). |
| `message` | `string` | - | 메인 메시지 텍스트 (언어 설정을 덮어씁니다). `\n`으로 줄바꿈을 지원합니다. |
| `tip` | `string` | - | 팁 메시지 텍스트 (언어 설정을 덮어씁니다). `\n`으로 줄바꿈을 지원합니다. |
| `className` | `string` | - | 루트 요소의 커스텀 클래스 이름. |
| `overlayClassName` | `string` | - | 오버레이 배경의 커스텀 클래스 이름. |
| `modalClassName` | `string` | - | 모달 컨테이너의 커스텀 클래스 이름. |

## 지원 언어

- `en` - 영어 (기본값)
- `ko` - 한국어
- `ja` - 일본어
- `zh` - 중국어
- `es` - 스페인어
- `fr` - 프랑스어
- `de` - 독일어

## 예제

### 브라우저 언어 자동 감지 (기본값)

```tsx
import MobileWarning from 'react-mobile-warning';

function App() {
  return (
    <>
      <MobileWarning />
      {/* 브라우저 언어를 자동으로 사용 */}
    </>
  );
}
```

### 언어 코드 사용

```tsx
import MobileWarning from 'react-mobile-warning';

function App() {
  return (
    <>
      <MobileWarning language="ko" />
      {/* 한국어 버전 강제 사용 */}
    </>
  );
}
```

### 자동 감지 비활성화

```tsx
import MobileWarning from 'react-mobile-warning';

function App() {
  return (
    <>
      <MobileWarning language={null} />
      {/* 항상 영어 사용 */}
    </>
  );
}
```

### 커스텀 메시지

```tsx
import MobileWarning from 'react-mobile-warning';

function App() {
  return (
    <>
      <MobileWarning
        language="ko"
        title="데스크톱 전용"
        message="이 애플리케이션은 데스크톱 컴퓨터가 필요합니다."
        tip="데스크톱 브라우저를 사용해주세요."
      />
    </>
  );
}
```

## 요구사항

- React 16.8.0 이상
- Tailwind CSS (스타일링용)

## 스타일링

이 컴포넌트는 Tailwind CSS 클래스를 사용합니다. 프로젝트에 Tailwind CSS가 설정되어 있는지 확인하세요.

Tailwind CSS를 사용하지 않는 경우, `className`, `overlayClassName`, `modalClassName` props를 사용하여 스타일을 덮어쓸 수 있습니다.

## 라이선스

MIT

## 작성자

Glacier Han

