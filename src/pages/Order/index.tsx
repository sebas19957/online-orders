import { useEffect, useState } from "react";

import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Button, Paper, Tooltip } from "@mui/material";
import { useSnackbar } from "notistack";

import { CustomPagination } from "../../components/CustomPagination";
import { NoDataFoundDataGrid } from "../../components/NoDataFoundDataGrid";

import { getOrders } from "../../services/orders";

import useStyles from "./styles";

const OrderPage = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [dataOrder, setDataOrder] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOrders();
        const list = Object.values(response.data);
        const processedData = list?.map((item: any) => ({
          id: item?.id,
          product: item?.product,
          quantity: item?.quantity,
          totalPrice: item?.totalPrice,
          total: item?.totalPrice * item?.quantity,
        }));

        setDataOrder(processedData);
      } catch (error: any) {
        enqueueSnackbar(error?.message, {
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
          variant: "error",
        });
      }
    };
    fetchData();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "product",
      headerName: "Producto",
      width: 250,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "quantity",
      headerName: "Cantidad",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "totalPrice",
      headerName: "Precio",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "total",
      headerName: "Total",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "",
      headerName: "Acciones",
      width: 200,
      align: "center",
      headerAlign: "center",
      renderCell: (params: GridRenderCellParams) => (
        <>
          <Tooltip title="Ver productos" arrow>
            <Button
              variant="contained"
              color="primary"
              sx={{ color: "black !important" }}
              // onClick={() => handlerOpen("edit", params.row.id)}
            >
              Ver Proucto
            </Button>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ width: "950px", borderRadius: "15px" }}>
        <Box
          component="div"
          sx={{
            minHeight: dataOrder ? "400px" : "450px",
            transition: "height 0.5s",
          }}
          className={classes.loaderContainer}
        >
          <DataGrid
            rows={dataOrder}
            columns={columns}
            className={classes.dataGrid}
            slots={{
              pagination: CustomPagination,
              noRowsOverlay: NoDataFoundDataGrid,
            }}
            slotProps={{
              footer: { sx: { justifyContent: "center" } },
            }}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 25]}
            rowSelection={false}
            sx={{
              color: "black",
            }}
            localeText={{
              MuiTablePagination: {
                labelDisplayedRows: ({ from, to, count }) =>
                  `${from} - ${to} de ${count}`,
                labelRowsPerPage: "Filas por página:",
              },
            }}
          />
        </Box>
      </Paper>
    </div>
  );
};

export default OrderPage;
