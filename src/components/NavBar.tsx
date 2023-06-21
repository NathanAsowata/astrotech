import logo from "../assets/astrotech.png";
import { Badge, Grid, Typography } from "@mui/material";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";

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

      <Grid item sm={7} textAlign={"center"}>
        <Typography variant="body1">SearchBar comes here</Typography>
      </Grid>

      <Grid item sm={2.5} sx={{ display: "flex", alignItems: "center" }}>
        <Badge badgeContent={5} color="primary">
          <ShoppingCart color="secondary" fontSize="large" />
        </Badge>

        <AccountCircle
          color="secondary"
          fontSize="large"
          sx={{ marginLeft: 3 }}
        />
        <Typography
          variant="body1"
          fontWeight={"bold"}
          sx={{ alignSelf: "end" }}
        >
          Hello, Nathan
        </Typography>
      </Grid>
    </Grid>
  );
}

export default NavBar;
