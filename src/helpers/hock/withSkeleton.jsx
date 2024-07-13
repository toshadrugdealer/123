import { Skeleton } from "../../components/Sleleton/Skeleton";

export function withSkeleton(Component, type, count, direction) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton count={count} type={type} direction={direction} />;
    }
    return <Component {...restProps} />;
  };
}
