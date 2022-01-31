---
id: when
title: When
sidebar_label: When
---

### Overview

- This component represents a **condition** to be satisfied.
- Its `children` will be rendered if the `predicate` function returns a truthy
  value.
- If you pass the `value` prop to its `Match` parent, it's going to be available
  as the first parameter of your `predicate` function.
- It takes one type parameter:
  - `Shape`: It's the shape of the `value` prop to its `Match` parent. Useful
    for type inference.

### Props

| Name                   | Type                       | Default value | Description                                                                                                                                                                   |
| ---------------------- | -------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children _(required)_  | ReactNode                  |               | Any node to be rendered when the predicate matches.                                                                                                                           |
| predicate _(required)_ | (value?: Shape) => boolean |               | Condition to be satisfied for the `children` to be rendered. If the `value` prop was passed to its `Match` parent, then this predicate will expose it as its first parameter. |
