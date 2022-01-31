---
id: match
title: Match
sidebar_label: Match
---

## Overview

- This component is the wrapper for the matching cases.
- The only required prop is its `children`.
- Valid `children` for it are only: `With`, `When`, and `Otherwise`.
- If you plan on having `With` cases, then you need to pass a `value` prop.
- If you use the `otherwise` prop, then don't use the `Otherwise` component as
  children.

## Props

| Name                  | Type                      | Default value | Description                                                                                               |
| --------------------- | ------------------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| value                 | Shape                     |               | Entry point to create a pattern-matching expression.                                                      |
| children _(required)_ | \_MatchChildren&lt;Shape> |               | The patterns the `value` prop should match. Can be represented as `With`, `When`, and `Otherwise`.        |
| otherwise             | Element                   |               | A default value to be used if nothing matches. If used, then the `Otherwise` component should be omitted. |
| firstMatch            | boolean                   |               | Indicates whether anything that matches should render or only the first match.                            |
