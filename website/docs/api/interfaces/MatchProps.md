---
id: "MatchProps"
title: "Interface: MatchProps<Shape>"
sidebar_label: "MatchProps"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `Shape` | extends `Object` |

## Properties

### children

• **children**: `_MatchChildren`<`Shape`\>

The patterns the `value` prop should match. Can be represented as `With`, `When`, and `Otherwise`.

#### Defined in

[src/components/Match/Match.tsx:22](https://github.com/ythecombinator/react-matchez/blob/c3e2afb/src/components/Match/Match.tsx#L22)

___

### firstMatch

• `Optional` **firstMatch**: `boolean`

Indicates whether anything that matches should render or only the first match.

#### Defined in

[src/components/Match/Match.tsx:24](https://github.com/ythecombinator/react-matchez/blob/c3e2afb/src/components/Match/Match.tsx#L24)

___

### value

• `Optional` **value**: `Shape`

Entry point to create a pattern-matching expression.

#### Defined in

[src/components/Match/Match.tsx:20](https://github.com/ythecombinator/react-matchez/blob/c3e2afb/src/components/Match/Match.tsx#L20)
