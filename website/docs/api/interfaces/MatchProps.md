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

[src/components/Match/Match.tsx:21](https://github.com/ythecombinator/react-matchez/blob/b285763/src/components/Match/Match.tsx#L21)

___

### firstMatch

• `Optional` **firstMatch**: `boolean`

Indicates whether anything that matches should render or only the first match.

#### Defined in

[src/components/Match/Match.tsx:23](https://github.com/ythecombinator/react-matchez/blob/b285763/src/components/Match/Match.tsx#L23)

___

### value

• `Optional` **value**: `Shape`

Entry point to create a pattern-matching expression.

#### Defined in

[src/components/Match/Match.tsx:19](https://github.com/ythecombinator/react-matchez/blob/b285763/src/components/Match/Match.tsx#L19)
