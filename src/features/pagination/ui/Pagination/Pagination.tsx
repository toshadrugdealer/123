import { ReactNode } from "react";
import { PaginationButtons } from "../PaginationButtons/PaginationButtons";
import { IPaginationProps } from "../../model/types";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: ReactNode;
}

export function Pagination({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
}
