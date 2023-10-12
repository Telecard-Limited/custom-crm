"use client";
import * as React from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Grid, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Update } from "@mui/icons-material";
import CreateFormModal from "./createformModal";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function createData(name: string, email: string, title: string) {
  return { name, email, title };
}

const rows = [
  createData("rishabh", "rishabhchowdhry.99@gmail.com", "sample form"),
  createData("rishabh", "rishabhchowdhry.99@gmail.com", "sample form"),
  createData("rishabh", "rishabhchowdhry.99@gmail.com", "sample form"),
  createData("rishabh", "rishabhchowdhry.99@gmail.com", "sample form"),
  createData("rishabh", "rishabhchowdhry.99@gmail.com", "sample form"),
  createData("rishabh", "rishabhchowdhry.99@gmail.com", "sample form"),
];

const FormTable = () => {
  const [createModal, setCreateModal] = React.useState("false");
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{
              width: "35%",
              mt: 4,
              backgroundColor: "#2D3748 !important",
            }}
            onClick={() => setCreateModal("true")}
          >
            Create
          </Button>
          <Button
            variant="outlined"
            startIcon={<Update />}
            sx={{
              width: "35%",
              mt: 4,
            }}
          >
            Update
          </Button>
        </Grid>
        <Grid container sx={{ mt: 4 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" color="#172554">
                    Name
                  </StyledTableCell>
                  <StyledTableCell align="center" color="#172554">
                    Email
                  </StyledTableCell>
                  <StyledTableCell align="center" color="#172554">
                    Title
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.title}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {createModal && <CreateFormModal />}
      </Container>
    </>
  );
};

export default FormTable;
