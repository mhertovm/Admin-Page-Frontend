import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MenuItem} from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import GamepadRoundedIcon from '@mui/icons-material/GamepadRounded';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Admin() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item xs={2}>
          <Item>
          <MenuItem sx={{ marginTop: "15px"}}>
            <AppsIcon/>
            <Link to={"/productcrud"}>Products</Link>
          </MenuItem>
          <MenuItem sx={{ marginTop: "15px"}}>
            <AppsIcon/>
            <Link to={"/categorycrud"}>Categories</Link>
          </MenuItem>
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <Outlet />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Admin;