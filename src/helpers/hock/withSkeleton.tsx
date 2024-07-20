import { ComponentType } from "react";
import { Skeleton } from "../../components/Sleleton/Skeleton";
import { DirectionType, SkeletonType } from "../../interfaces";

interface Props {
  isLoading: boolean;
}

export function withSkeleton<P extends object>(
  Component: ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
) {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton count={count} type={type} direction={direction} />;
    }
    return <Component {...(restProps as P)} />;
  };
}
