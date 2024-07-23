import { ComponentType } from "react";
import { Skeleton } from "../ui/Sleleton/Skeleton";
import { DirectionType, SkeletonType } from "../interfaces";

interface Props {
  isLoading: boolean;
  direction?: DirectionType;
  type?: SkeletonType;
}

export function withSkeleton<P extends object>(
  Component: ComponentType<P>,

  count?: number
) {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, type, direction = "column", ...restProps } = props;
    if (isLoading) {
      return <Skeleton count={count} type={type} direction={direction} />;
    }
    return (
      <Component type={type} direction={direction} {...(restProps as P)} />
    );
  };
}
