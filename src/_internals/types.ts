import { PropsWithChildren, ReactElement } from 'react';
import { Pattern } from 'ts-pattern';
import { NotPattern } from 'ts-pattern/lib/types/Pattern';

import { WhenProps } from '../components/When';
import { WithProps } from '../components/With';

export type PatternUnion<Shape extends {}> = Pattern<Shape> | NotPattern<Shape>;

export interface ElementWithMetadata<Shape extends {}> {
  element: ReactElement<PropsWithChildren<Shape>>;
  position: number;
}

export type ElementWithMetadataUnion<Shape extends {}> =
  | ElementWithMetadata<Shape>
  | ElementWithMetadata<WithProps<Shape, boolean>>
  | ElementWithMetadata<WhenProps<Shape>>;

export interface MatchWithCase<Shape extends {}>
  extends ElementWithMetadata<Shape> {
  pattern: PatternUnion<Shape>;
  strict: boolean;
}

export type DeepPatternUnion<Src, Strict extends boolean> = Src extends Function
  ? Src
  : Src extends Array<infer U>
  ? _DeepPatternUnionArray<U, Strict>
  : Src extends object
  ? Strict extends true
    ? _DeepPatternUnionObjectStrict<Src, Strict>
    : _DeepPatternUnionObject<Src, Strict>
  : Src | undefined;

interface _DeepPatternUnionArray<Src, Strict extends boolean>
  extends Array<DeepPatternUnion<NotPattern<Src>, Strict>> {}

type _DeepPatternUnionObject<Src, Strict extends boolean> = {
  [Key in keyof Src]: DeepPatternUnion<PatternUnion<Src[Key]>, Strict>;
};

type _DeepPatternUnionObjectStrict<Src, Strict extends boolean> = {
  [Key in keyof Src]-?: DeepPatternUnion<PatternUnion<Src[Key]>, Strict>;
};
