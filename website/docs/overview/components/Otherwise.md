---
id: otherwise
title: Otherwise
sidebar_label: Otherwise
---

### Overview

- This component represents your default/fallback state; meaning its children
  represent what's going to be rendered when nothing matches your previous
  `When`/`With` assertions.
- Shouldn't be used if you've already passed the `otherwise` prop to its `Match`
  parent.
- Shouldn't be used more than once within one `Match` parent.

### Props

| Name                  | Type      | Default value | Description                                                              |
| --------------------- | --------- | ------------- | ------------------------------------------------------------------------ |
| children _(required)_ | ReactNode |               | Any node to be rendered when nothing matches `With` and `When` siblings. |
