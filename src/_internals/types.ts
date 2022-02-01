import { PropsWithChildren, ReactElement } from 'react';

import { Pattern } from 'ts-pattern';
import { NotPattern } from 'ts-pattern/lib/types/Pattern';

import { ExactProps } from '../components/Exact';
import { WhenProps } from '../components/When';
import { WithProps } from '../components/With';

export type PatternUnion<Shape extends {}> = Pattern<Shape> | NotPattern<Shape>;

export interface ElementWithMetadata<Shape extends {}> {
  element: ReactElement<PropsWithChildren<Shape>>;
  position: number;
}

export type ElementWithMetadataUnion<Shape extends {}> =
  | ElementWithMetadata<Shape>
  | ElementWithMetadata<WithProps<Shape>>
  | ElementWithMetadata<ExactProps<Shape>>
  | ElementWithMetadata<WhenProps<Shape>>;

export interface MatchWithCase<Shape extends {}>
  extends ElementWithMetadata<Shape> {
  pattern: PatternUnion<Shape>;
}

export type DeepPatternUnion<Src, Exact extends boolean> = Src extends Function
  ? Src
  : Src extends Array<infer U>
  ? _DeepPatternUnionArray<U, Exact>
  : Src extends object
  ? Exact extends true
    ? _DeepPatternUnionObjectExact<Src, Exact>
    : _DeepPatternUnionObject<Src, Exact>
  : Src | undefined;

interface _DeepPatternUnionArray<Src, Exact extends boolean>
  extends Array<DeepPatternUnion<NotPattern<Src>, Exact>> {}

type _DeepPatternUnionObject<Src, Exact extends boolean> = {
  [Key in keyof Src]+?: DeepPatternUnion<PatternUnion<Src[Key]>, Exact>;
};

type _DeepPatternUnionObjectExact<Src, Exact extends boolean> = {
  [Key in keyof Src]-?: DeepPatternUnion<PatternUnion<Src[Key]>, Exact>;
};
