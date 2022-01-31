---
id: with
title: With
sidebar_label: With
---

## Overview

- This component represents a **shape** to be matched.
- Its props are the pattern: the shape of value you expect for this branch.
- Its `children` will be rendered if the shape defined within its other props
  match the `value` prop passed to its `Match` parent.
- It takes two type parameters:
  - `Shape`: It's the shape of the `value` prop to its `Match` parent. Useful
    for type inference.
  - `Strict`: Indicates whether you want the compiler to make all the `Shape`
    properties deeply `required` in order to match.

## Props

| Name                  | Type      | Default value | Description                                                                                   |
| --------------------- | --------- | ------------- | --------------------------------------------------------------------------------------------- |
| children _(required)_ | ReactNode |               | Any node to be rendered when its other props match the `value` defined on its `Match` parent. |
