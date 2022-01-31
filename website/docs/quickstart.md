---
id: quickstart
title: Quickstart
sidebar_label: Quickstart
---

1. Add it to your project:

```sh
npm install react-matchez
yarn add react-matchez
```

2. Define what is the shape of the object you wanna branch on:

```typescript
export type Data =
  | { type: 'text'; content?: string }
  | { type: 'img'; src?: string };

export type Result =
  | { type: 'ok'; data: Data }
  | { type: 'cancel'; error?: Error };

export const result: Result = { type: 'ok', data: { type: 'img' } };
```

3. Start using `getPatternMatch` (or `usePatternMatch`):

```tsx
import { getPatternMatch } from 'react-matchez';

const { Match, With, Otherwise } = getPatternMatch<Result, false>();

const Component = () => {
  return (
    <Match value={result}>
      <With type="cancel">Cancel</With>
      <With type="ok" data={{ type: 'text' }}>
        OK - Text
      </With>
      <With type="ok" data={{ type: 'img' }}>
        OK - Image
      </With>
      <Otherwise>Fallback</Otherwise>
    </Match>
  );
};
```
