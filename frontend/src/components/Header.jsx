import { Link } from "react-router-dom";
import Logosvg from "../utils/svg/LogoSvg";
import SearchSvg from "../utils/svg/SearchSvg";
import UserSvg from "../utils/svg/UserLoginSvg";
import { useSelector } from "react-redux";
/////////////////////////

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { SiGooglehome } from "react-icons/si";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const user = useSelector((state) => state.user.user);
  return (
    // <AppBar
    //   position="fixed"
    //   sx={{
    //     background: "white",
    //     color: "black",
    //     boxShadow: "none",
    //     // marginLeft: "5px",
    //   }}>
    //   <Container maxWidth="xl">
    //     <Toolbar
    //       disableGutters
    //       sx={{ marginLeft: "-135px", marginRight: "-135px" }}>
    //       <div className="mr-4">
    //         <SiGooglehome />
    //       </div>
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="a"
    //         href="/"
    //         sx={{
    //           mr: 2,
    //           display: { xs: "none", md: "flex" },
    //           fontFamily: "monospace",
    //           fontWeight: 700,
    //           // letterSpacing: ".3rem",
    //           color: "inherit",
    //           textDecoration: "none",
    //         }}>
    //         Accomodo
    //       </Typography>

    //       <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit">
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: "bottom",
    //             horizontal: "left",
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "left",
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: "block", md: "none" },
    //           }}>
    //           {pages.map((page) => (
    //             <MenuItem key={page} onClick={handleCloseNavMenu}>
    //               <Typography textAlign="center">{page}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //       <Typography
    //         variant="h5"
    //         noWrap
    //         component="a"
    //         href=""
    //         sx={{
    //           mr: 2,
    //           display: { xs: "flex", md: "none" },
    //           flexGrow: 1,
    //           fontFamily: "monospace",
    //           fontWeight: 700,
    //           letterSpacing: ".3rem",
    //           color: "inherit",
    //           textDecoration: "none",
    //         }}>
    //         LOGO
    //       </Typography>
    //       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    //         {pages.map((page) => (
    //           <Button
    //             key={page}
    //             onClick={handleCloseNavMenu}
    //             sx={{ my: 2, color: "black", display: "block" }}>
    //             {page}
    //           </Button>
    //         ))}
    //       </Box>

    //       <Box sx={{ flexGrow: 0 }}>
    //         <Tooltip title="Open settings">
    //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    //           </IconButton>
    //         </Tooltip>
    //         <Menu
    //           sx={{ mt: "45px" }}
    //           id="menu-appbar"
    //           anchorEl={anchorElUser}
    //           anchorOrigin={{
    //             vertical: "top",
    //             horizontal: "right",
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "right",
    //           }}
    //           open={Boolean(anchorElUser)}
    //           onClose={handleCloseUserMenu}>
    //           {settings.map((setting) => (
    //             <MenuItem key={setting} onClick={handleCloseUserMenu}>
    //               <Typography textAlign="center">{setting}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //     </Toolbar>
    //   </Container>
    //   <hr />

    <div className=" justify-between">
      <header className=" flex justify-between mt-4 pl-10 pr-10">
        <a href="/" className="flex items-center gap-1 ">
          <Logosvg />
          <p className="font-bold text-2xl">title</p>
        </a>

        <div className="flex  border border-grey-500 rounded-full gap-2 p-2 shadow-lg shadow-grey-100">
          <input type="text" className="w-36 h-full rounded-full border-none" />
          <button className="bg-primary rounded-full p-1">
            <SearchSvg />
          </button>
        </div>
        <div className="flex  gap-1 ">
          <Link
            to={user ? "/account/myAccount" : "/login"}
            className="flex border items-center border-grey-500 rounded-full gap-2 p-2">
            <UserSvg />
            {user ? <div>{user.name.split(" ")[0]}</div> : <div>Login</div>}
          </Link>
        </div>
      </header>
      <hr className="mt-4" />
    </div>
    // </AppBar>
  );
}
export default Header;
