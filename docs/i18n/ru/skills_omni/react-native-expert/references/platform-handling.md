# Platform Handling (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-native-expert/references/platform-handling.md) · 🇪🇸 [es](../../../../es/skills_omni/react-native-expert/references/platform-handling.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-native-expert/references/platform-handling.md) · 🇩🇪 [de](../../../../de/skills_omni/react-native-expert/references/platform-handling.md) · 🇮🇹 [it](../../../../it/skills_omni/react-native-expert/references/platform-handling.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-native-expert/references/platform-handling.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-native-expert/references/platform-handling.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-native-expert/references/platform-handling.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-native-expert/references/platform-handling.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-native-expert/references/platform-handling.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-native-expert/references/platform-handling.md) · 🇮🇳 [in](../../../../in/skills_omni/react-native-expert/references/platform-handling.md) · 🇹🇭 [th](../../../../th/skills_omni/react-native-expert/references/platform-handling.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-native-expert/references/platform-handling.md) · 🇮🇩 [id](../../../../id/skills_omni/react-native-expert/references/platform-handling.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-native-expert/references/platform-handling.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-native-expert/references/platform-handling.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-native-expert/references/platform-handling.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-native-expert/references/platform-handling.md) · 🇳🇴 [no](../../../../no/skills_omni/react-native-expert/references/platform-handling.md) · 🇩🇰 [da](../../../../da/skills_omni/react-native-expert/references/platform-handling.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-native-expert/references/platform-handling.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-native-expert/references/platform-handling.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-native-expert/references/platform-handling.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-native-expert/references/platform-handling.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-native-expert/references/platform-handling.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-native-expert/references/platform-handling.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-native-expert/references/platform-handling.md) · 🇮🇱 [he](../../../../he/skills_omni/react-native-expert/references/platform-handling.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-native-expert/references/platform-handling.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-native-expert/references/platform-handling.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-native-expert/references/platform-handling.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-native-expert/references/platform-handling.md)

---


Patterns for writing platform-specific code across iOS and Android.

## Platform.select

```tsx
import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    borderCurve: 'continuous',
    backgroundColor: '#fff',
    // Modern: use CSS boxShadow (works cross-platform in RN 0.79+)
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  text: {
    fontFamily: Platform.select({
      ios: 'SF Pro',
      android: 'Roboto',
    }),
  },
})
```

**Note:** With RN 0.79+, CSS `boxShadow` works cross-platform. Use it instead of legacy `shadowColor`/`elevation` patterns.

## Platform.OS

```tsx
import { Platform } from 'react-native'

function MyComponent() {
  const isIOS = Platform.OS === 'ios'

  return (
    <View>
      {isIOS ? <IOSOnlyComponent /> : null}
      <Text>{Platform.OS}</Text>
    </View>
  )
}
```

## Platform-Specific Files

```
components/
├── Button.tsx           # Shared logic
├── Button.ios.tsx       # iOS-specific
└── Button.android.tsx   # Android-specific
```

```tsx
// Import resolves to the correct platform file automatically
import Button from './components/Button'
```

## SafeAreaView

```tsx
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'

// Root: wrap app with provider (use initialWindowMetrics for faster initial render)
function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Navigation />
    </SafeAreaProvider>
  )
}
```

**For ScrollViews**, use `contentInsetAdjustmentBehavior` instead of SafeAreaView wrapper:

```tsx
<ScrollView contentInsetAdjustmentBehavior="automatic">{children}</ScrollView>
```

**For custom headers or non-scrollable screens**, use the hook:

```tsx
import { useSafeAreaInsets } from 'react-native-safe-area-context'

function CustomHeader() {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>Header</Text>
    </View>
  )
}
```

## KeyboardAvoidingView

```tsx
import { KeyboardAvoidingView, Platform } from 'react-native'

function FormScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.select({ ios: 88, android: 0 })}
    >
      <ScrollView>
        <TextInput placeholder="Name" />
        <TextInput placeholder="Email" />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
```

## StatusBar

```tsx
import { StatusBar } from 'react-native'

function Screen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Content />
    </>
  )
}
```

## Android Back Button

```tsx
import { useEffect } from 'react'
import { BackHandler, Platform } from 'react-native'

function useBackHandler(handler: () => boolean) {
  useEffect(() => {
    if (Platform.OS !== 'android') return

    const subscription = BackHandler.addEventListener('hardwareBackPress', handler)

    return () => subscription.remove()
  }, [handler])
}

// Usage
function Screen() {
  useBackHandler(() => {
    if (hasUnsavedChanges) {
      showDiscardAlert()
      return true // Prevent default back
    }
    return false // Allow default back
  })
}
```

## Quick Reference

| API                         | Purpose                          |
| --------------------------- | -------------------------------- |
| `Platform.OS`               | Get platform ('ios' / 'android') |
| `Platform.select()`         | Platform-specific values         |
| `Platform.Version`          | OS version number                |
| `.ios.tsx` / `.android.tsx` | Platform-specific files          |

| Component                        | Purpose                          |
| -------------------------------- | -------------------------------- |
| `SafeAreaProvider`               | Provide safe area insets         |
| `useSafeAreaInsets()`            | Access safe area insets          |
| `contentInsetAdjustmentBehavior` | Native safe area for ScrollViews |
| `KeyboardAvoidingView`           | Keyboard handling                |
| `StatusBar`                      | Status bar styling               |
| `BackHandler`                    | Android back button              |
