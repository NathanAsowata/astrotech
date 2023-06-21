import { Search } from "@mui/icons-material"
import { Button, Input } from "@mui/material"

function SearchBar() {
  return (
    <form style={{
        display: "flex"
    }}>
        <Input 
            required
            placeholder="Search..."
            disableUnderline
            fullWidth
            sx={{
                border: "1px solid #4169e1",
                borderRight: "none",
                borderRadius: "6px 0px 0px 6px",
                paddingX: 0.4,
                boxShadow: "0px 3px 1px #c0c0c0"
            }}
        />
        <Button 
            variant="contained"
            sx={{
                borderRadius: "0px 6px 6px 0px",
                boxShadow: "0px 3px 1px #c0c0c0",
                padding: "2px",
                "&:hover": {
                    backgroundColor: "#000080"
                }
            }}
        >
            <Search />
        </Button>
    </form>
  )
}

export default SearchBar