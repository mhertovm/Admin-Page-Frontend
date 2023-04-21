import { Link } from "react-router-dom";
import { MenuItem, MenuList, Box } from "@mui/material";

function Panel() {
  return (
    <div>
      <Box
        sx={{
          height: 50,
        }}
      >
        <MenuList
          sx={{ display: "flex", gap: "20px" }}
        >
          <MenuItem sx={{ marginTop: "15px" }}>Dashboard</MenuItem>
          <Link to="/productcrud">
            <MenuItem>Products</MenuItem>
          </Link>
          <Link to="/categorycrud">
            <MenuItem>Categories</MenuItem>
          </Link>
        </MenuList>
      </Box>
    </div>
  );
}

export default Panel;