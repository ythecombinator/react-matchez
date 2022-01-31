---
id: advanced-usage
title: Advanced Usage
sidebar_label: Advanced Usage
---

## Using the original components + providing type parameters

This approach is ideal when you have multiple `Match`—or `Switch`—occurrences
within your component.

The downside is that you'll have to manually pass type parameters to all of your
cases (`With`, `When`, etc.).

Here's an example:

```tsx
import { Match, Otherwise, With } from 'react-matchez';

// First shape to be branched
type FirstShape =
  | {
      type: 'ok';
      data: { type: 'text'; content?: string } | { type: 'img'; src?: string };
    }
  | { type: 'cancel'; error?: Error };

const firstResult: FirstShape = { type: 'ok', data: { type: 'img' } };

// Second shape to be branched
type SecondShape =
  | { type: 'text'; content?: string }
  | { type: 'img'; extension?: string };

const secondResult: SecondShape = { type: 'img', extension: 'jpg' };

// Your component
const Component = () => {
  return (
    <>
      <Match value={firstResult}>
        <With<FirstShape, false> type="cancel">Cancel</With>
        <With<FirstShape, false> type="ok" data={{ type: 'text' }}>OK - Text</With>
        <With<FirstShape, false> type="ok" data={{ type: 'img' }}>OK - Image</With>

        <Otherwise>Fallback</Otherwise>
      </Match>

      <Match value={secondResult}>
        <With<SecondShape, false> type="img">Image - Any</With>
        <With<SecondShape, false> type="img" extension="jpg">Image - JPG</Exact>
        <With<SecondShape, false> type="img" extension="png">Image - PNG</Exact>

        <Otherwise>Fallback</Otherwise>
      </Match>
    </>
  );
};
```

## Using with React.Suspense + React.lazy()

This library plays really well with Suspense/lazy in scenarios of
feature/browser/OS detection.

Combine the three of them and you'll have your users downloading **only the
actual component bundle** that matches your condition.

Here's an example:

```tsx
const supportsSensor = () => Boolean(window.AmbientLightSensor);

const AmbientLight = React.lazy(() => import('./AmbientLight'));
const Fallback = React.lazy(() => import('./Fallback'));

const MyComponent = () => {
  const { Match, When, Otherwise } = usePatternMatch();

  return (
    <Suspense fallback={'Loading'}>
      <Match>
        <When predicate={supportsSensor}>
          <AmbientLight />
        </When>
        <Otherwise>
          <Fallback />
        </Otherwise>
      </Match>
    </Suspense>
  );
};
```
