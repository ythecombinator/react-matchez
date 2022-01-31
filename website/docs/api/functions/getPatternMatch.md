---
id: "getPatternMatch"
title: "Function: getPatternMatch"
sidebar_label: "getPatternMatch"
sidebar_position: 0
custom_edit_url: null
---

▸ `Const` **getPatternMatch**<`Shape`\>(`value?`): `Object`

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

[src/utils/pattern-match.ts:17](https://github.com/ythecombinator/react-matchez/blob/7c6b6bd/src/utils/pattern-match.ts#L17)
