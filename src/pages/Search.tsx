import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { BiPlus, BiBookmark, BiFilter } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Search() {
  return (
    <>
      <div
        className="d-flex flex-column sticky top-0 z-50"
        style={{ width: "100%" }}
      >
        <div className="flex justify-between items -center px-14 h-14 bg-[#E0E9F7] opacity-95">
          <div className="flex gap-8 items-center text-2xl">
            <Link to="/">
              <div className="flex gap-1 items-center justify-center">
                <span className="text-xl font-medium">Home</span>
                <BsChevronRight className="text-2xs text-blue-400" />
                <span className="text-sm font-medium">OC</span>
                <BsChevronRight className="text-2xs text-blue-400" />
                <span className="text-sm font-medium text-gray-500">
                  Item Search
                </span>
              </div>
            </Link>
          </div>
        </div>
        <br />
        <div className="flex justify-between items -center px-14 h-14 opacity-95">
          <span className="text-xl font-medium">Item Search</span>
          <div className="flex items-center justify-center gap-5 border-r-amber-500">
            <form>
              <div className="relative w-96">
                <div className="absolute inset-y-0 right-2 flex items-center pl-5 pointer-events-none">
                  <AiOutlineSearch className="text-2xl text-blue-400" />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-200 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-96 pl-7 p-2.5  dark:bg-white dark:border-gray-500 dark:placeholder-black dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500"
                  placeholder="Search by Item #, Order #"
                />
              </div>
            </form>

            <div className="text-xl p-3 border-gray-500">
              <BiPlus className="text-2xs text-blue-400" />
            </div>
            <div className="text-xl p-3">
              <BiBookmark className="text-2xl text-blue-400" />
            </div>
            <div className="text-xl p-3">
              <BiFilter className="text-2xl text-blue-400" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items -center px-14 h-14 opacity-95">
          <span className="text-sm font-medium text-gray-500">0 items</span>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Item>
              <span className="text-xl font-bold text-black">What are you looking for ?</span>
              <br />
              <br />
              <span className="text-sm font-normal text-blue-300">Get started by searching & filtering a few</span>
              <br />
              <br />
          
              <Button variant="contained">Fetch data</Button>
              <br />
              <br />
              <span className="text-sm font-normal text-gray-300">or</span>
              <span className="text-sm font-normal text-blue-300">  search for an item</span>
              </Item>
            </Grid>
        
          
          
          </Grid>
        </Box>

        {/* <div className="flex justify-between items -center px-14 h-14">
          <span className="text-sm font-medium text-gray-500">0 items</span>
        </div> */}
      </div>
    </>
  );
}
