---
id: "WhenProps"
title: "Interface: WhenProps<Shape>"
sidebar_label: "WhenProps"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `Shape` | extends `Object` |

## Properties

### children

• **children**: `ReactNode`

Any node to be rendered when the predicate matches.

#### Defined in

[src/components/When/When.tsx:9](https://github.com/ythecombinator/react-matchez/blob/504c7f8/src/components/When/When.tsx#L9)

## Methods

### predicate

▸ **predicate**(`value?`): `boolean`

Condition to be satisfied for the `children` to be rendered.
If the `value` prop was passed to its parent, then this predicate
will expose it as its first parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `Shape` |

#### Returns

`boolean`

#### Defined in

[src/components/When/When.tsx:13](https://github.com/ythecombinator/react-matchez/blob/504c7f8/src/components/When/When.tsx#L13)
