import {
  Checkbox,
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
import { fetchCountries, sortname } from "../redux/reducers/countries";
import { Link } from "react-router-dom";
import { Country } from "../types/country";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

type Props = {
  countries: Country[]
}

const CountryTable = ( {countries} :Props) => {

  const state = useAppSelector((state) => state.countriesReducer);
  const dispatch = useAppDispatch();
  return (
    <TableContainer sx={{ bgcolor: "background.default" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Flag</TableCell>
            <TableCell onClick={() => {dispatch(sortname())}}>{`Official name ${state.sortName}`}</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Capital</TableCell>
            <TableCell>Favourite</TableCell>
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
              <TableCell><Checkbox checked={} OnChange={} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}/></TableCell>
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
