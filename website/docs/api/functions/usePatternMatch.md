---
id: "usePatternMatch"
title: "Function: usePatternMatch"
sidebar_label: "usePatternMatch"
sidebar_position: 0
custom_edit_url: null
---

▸ `Const` **usePatternMatch**<`Shape`\>(`value?`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Shape` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `Shape` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `Exact` | `ComponentType`<[`ExactProps`](../types/ExactProps)<`Shape`\>\> |
| `Match` | `ComponentType`<[`MatchProps`](../interfaces/MatchProps)<`Shape`\>\> |
| `Otherwise` | (`props`: [`OtherwiseProps`](../interfaces/OtherwiseProps)) => `Element` |
| `Switch` | `ComponentType`<[`SwitchProps`](../types/SwitchProps)<`Shape`\>\> |
| `When` | `ComponentType`<[`WhenProps`](../interfaces/WhenProps)<`Shape`\>\> |
| `With` | `ComponentType`<[`WithProps`](../types/WithProps)<`Shape`\>\> |

#### Defined in

[src/utils/pattern-match.ts:44](https://github.com/ythecombinator/react-matchez/blob/f44ba50/src/utils/pattern-match.ts#L44)
