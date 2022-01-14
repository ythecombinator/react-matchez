import { ElementWithMetadata, ElementWithMetadataUnion } from './types';
import { When, WhenProps } from '../components/When';

// WHEN

export function isWhen<Shape>(
  child: ElementWithMetadataUnion<Shape>
): child is ElementWithMetadata<WhenProps<Shape>> {
  return child.element.type === When;
}

export function whenMatcher<Shape>(value?: Shape) {
  return (child: ElementWithMetadata<WhenProps<Shape>>) =>
    child.element.props.predicate(value);
}

export function evaluateWhenExpression<Shape>(
  childrenArr: Array<ElementWithMetadata<WhenProps<Shape>>>,
  value?: Shape
) {
  if (childrenArr.length === 0) {
    return [];
  }

  return childrenArr.filter(whenMatcher(value)).map((item) => ({
    element: item.element,
    position: item.position,
  }));
}
