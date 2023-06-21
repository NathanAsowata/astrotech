import { Badge, Box, Grid, Typography } from "@mui/material"
import logo from "../assets/astrotech.png"
import { AccountCircle, ShoppingCart } from "@mui/icons-material"


function NavBar() {
  return (
    <Grid container spacing={2} py={2} px={5} >
        <Grid item sm={2}>
        <img src={logo} alt="Astrotech Logo" width={38} />
        <Typography 
            variant="h4" 
            color="primary" 
            sx={{
                display: "inline-block", 
                fontWeight: "600"
            }}
        >
        strotech
        </Typography>
        </Grid>

        <Box>
            <Badge badgeContent={5} color="secondary">
                <ShoppingCart />
            </Badge>
            
            <AccountCircle />
        </Box>
    </Grid>
  )
}

export default NavBar