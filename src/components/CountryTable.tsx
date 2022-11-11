import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCountries } from "../redux/reducers/countries";
import { Link } from "react-router-dom";

const CountryTable = () => {
  const countries = useAppSelector((state) => state.countriesReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  return (
    <TableContainer sx={{ bgcolor: "background.default" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Flag</TableCell>
            <TableCell>Official name</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Capital</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((item) => (
            <TableRow key={item.name.official}>
              <TableCell>
                <img src={item.flags[0]} alt="" width="50em" />
              </TableCell>
              <TableCell><Link style={{textDecoration: 'none', color:'white'}}  to={"country/"+ item.name.official} key={item.name.official}>{item.name.official}</Link></TableCell>
              <TableCell>{Object.keys(item.currencies)}</TableCell>
              <TableCell>{item.capital}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/*  <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter> */}
      </Table>
    </TableContainer>
  );
};

export default CountryTable;
