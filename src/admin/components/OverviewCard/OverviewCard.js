import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TableBody,
  Table,
  TableContainer,
  Paper,
  TableRow,
  TableCell,
} from "@mui/material";

import "./OverviewCard.scss";

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData("Status", <button>Available</button>),
  createData("Assign Inventory Project:", "Dan ASSIGNED"),
  createData("", "Patrick (Internal)"),
  createData("", "Jim (Internal)"),
];

function OverViewCard() {
  return (
    <Box component="main" className="overview-main__body">
      <Card className="overview__content">
        <CardContent>
          <Typography component="div" className="overview-heading">
            Inventory Options
          </Typography>
          <Box className="overview__table">
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name} className="overview__table-row">
                      <TableCell
                        className="overview__table-key"
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>

                      <TableCell
                        className="overview__table-value"
                        align="right"
                      >
                        {row.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
export default OverViewCard;