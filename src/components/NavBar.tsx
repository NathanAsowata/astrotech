import logo from "../assets/astrotech.png";
import { Badge, Box, Grid, Typography } from "@mui/material";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <Grid
      container
      spacing={2}
      p={1}
      alignItems="center"
      sx={{
        borderBottom: "1px solid #4169e1",
        boxShadow: "0px 3px 6px #1c1c1c",
      }}
    >
      <Grid item sm={2.5}>
        <img src={logo} alt="Astrotech Logo" width={38} />
        <Typography
          variant="h4"
          color="primary"
          sx={{
            display: "inline-block",
            fontWeight: "600",
          }}
        >
          strotech
        </Typography>
      </Grid>

      <Grid item sm={6.5} textAlign={"center"}>
        <SearchBar />
      </Grid>

      <Grid
        item
        sm={3}
        sx={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center" 
        }}
      >
        <Badge badgeContent={5} color="primary">
          <ShoppingCart color="secondary" fontSize="large" />
        </Badge>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#dcdcdc",
            width: "fit-content",
            padding: 0.5,
            marginLeft: 3,
            borderRadius: 8,
            "&:hover": {
              backgroundColor: "#a9a9a9",
              cursor: "pointer",
            },
          }}
        >
          <AccountCircle color="secondary" fontSize="large" />
          <Typography variant="body1" fontWeight={"bold"}>
            Hello, Nathan
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default NavBar;
