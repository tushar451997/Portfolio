import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



import Skills from '../Skills/SkillsSection';
import Work from '../experience/Experience';
import Contact from '../contact/Contact';
import About from '../about/About';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Skills', 'Work', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeNavItem, setActiveNavItem] = React.useState('Home');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavItemChange = (item) => {
    setActiveNavItem(item);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TUSHAR
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                backgroundColor: activeNavItem === item ? '#ccc' : 'transparent',
                '&:hover': {
                  backgroundColor: '#ccc',
                },
              }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => handleNavItemChange(item)}
                style={{
                  textDecoration: activeNavItem === item ? 'underline' : 'none',
                  color: 'black',
                }}
              >
                <ListItemText primary={item} />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'rgb(235, 233, 233)',
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },color:'black',fontWeight:600 }}
          >
            TUSHAR
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: 'black',
                  '&:hover': {
                    backgroundColor: '#ccc',
                  },
                  fontWeight:'900'
                }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleNavItemChange(item)}
                  style={{
                    textDecoration: activeNavItem === item ? 'underline' : 'none',
                    backgroundColor: activeNavItem === item ? 'red' : '',
                    color:activeNavItem === item ? 'white' : 'black',
                    padding:activeNavItem === item ? '5px 10px':'5px 10px',
                    borderRadius:'5px'
                  }}
                >
                  {item}
                </a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
 
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;