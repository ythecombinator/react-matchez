import { PropsWithChildren, ReactElement } from 'react';
import { Pattern } from 'ts-pattern';
import { NotPattern } from 'ts-pattern/lib/types/Pattern';

export interface ElementWithMetadata<Shape> {
  element: ReactElement<PropsWithChildren<Shape>>;
  position: number;
}

export interface MatchWithCase<Shape> extends ElementWithMetadata<Shape> {
  pattern: Pattern<Shape>;
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
  [Key in keyof Src]: DeepPatternUnion<_PatternUnion<Src[Key]>, Strict>;
};

type _DeepPatternUnionObjectStrict<Src, Strict extends boolean> = {
  [Key in keyof Src]-?: DeepPatternUnion<_PatternUnion<Src[Key]>, Strict>;
};

type _PatternUnion<Shape> = Pattern<Shape> | NotPattern<Shape>;
