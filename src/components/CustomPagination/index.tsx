import { GridPagination } from "@mui/x-data-grid";
import { TablePaginationProps } from "@mui/material";
import MuiPagination from "@mui/material/Pagination";
import {
  useGridApiContext,
  useGridSelector,
  gridPageCountSelector,
} from "@mui/x-data-grid";

export const Pagination = ({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, "page" | "onPageChange" | "className">) => {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
    />
  );
};

export const CustomPagination = (props: any) => {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
};
