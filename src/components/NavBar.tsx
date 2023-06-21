import logo from "../assets/astrotech.png";
import { Badge, Box, Grid, Hidden, Typography } from "@mui/material";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import SearchBar from "./SearchBar";

function NavBar() {

  return (
    <Grid
      container
      spacing={1}
      p={1.5}
      alignItems="center"
      sx={{
        borderBottom: "1px solid #4169e1",
        boxShadow: "0px 3px 6px #1c1c1c",
      }}
    >
      <Grid 
        item 
        sm={2.5}
        xs={8}
      >
        <img src={logo} alt="Astrotech Logo" width={30} />
        <Typography
          variant="h4"
          color="primary"
          sx={{
            display: "inline-block",
            fontSize: "26px",
            fontWeight: "600",
          }}
        >
          strotech
        </Typography>
      </Grid>

      <Grid 
        item 
        sm={6.5}
        xs={12}  
        order={{xs:3, sm:2}}
        textAlign={"center"}
        >
        <SearchBar />
      </Grid>

      <Grid
        item
        sm={3}
        xs={4}
        order={{xs: 2, sm:3}}
        sx={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center" 
        }}
      >
        <Badge badgeContent={5} color="primary">
          <ShoppingCart color="secondary" fontSize="medium" />
        </Badge>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#dcdcdc",
            width: "fit-content",
            padding: 0.7,
            marginLeft: 2,
            borderRadius: 8,
            "&:hover": {
              backgroundColor: "#a9a9a9",
              cursor: "pointer",
            },
          }}
        >
          <AccountCircle color="secondary" fontSize="medium" />
          <Hidden smDown>
            <Typography variant="body1" fontWeight={300}>
                Hello, Nathan
            </Typography>
          </Hidden>
        </Box>
      </Grid>
    </Grid>
  );
}

export default NavBar;
