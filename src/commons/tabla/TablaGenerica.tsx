import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MenuGenerico from "../menu/MenuGenerico";

// Estilos de la tabla
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type RowData = {
  [key: string]: string | number;
};

interface TablaGenericaProps {
  columns: string[];
  rows: RowData[];
  columnMap: { [key: string]: string };
}

export default function TablaGenerica({ columns, rows, columnMap}: TablaGenericaProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <StyledTableCell align="center" key={col}>{col}</StyledTableCell>
            ))}
            <StyledTableCell align="right">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.length > 0 ? (
           rows.map((row, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              {columns.map((col) => {
                const key = columnMap[col]; // Obtener el nombre de la clave real
                return <StyledTableCell key={col} align="center">{row[key]}</StyledTableCell>;
              })}
              <StyledTableCell align="right">
                <MenuGenerico opciones={["Ver", "Editar", "Borrar"]} />
              </StyledTableCell>
            </StyledTableRow>
          ))
        ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={columns.length + 1} align="center">
                No hay datos disponibles
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
