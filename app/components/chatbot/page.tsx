"use client";

import * as React from 'react';
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
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider} from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import axios from 'axios';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

/*dark theme*/
const darkTheme = createTheme({
  palette:{
    mode: "dark",
    primary:{
      main: "#90caf9",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

export default function ChatBot(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = React.useState('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    //setMessages(messages => [...messages, { sender: 'user', text: input }]);
    const currentMessage = input;

    setInput('');

    setMessages(messages => [...messages, { sender: 'user', text: input }]);

    axios.post("http://127.0.0.1:8000/chatbot/", {msg:currentMessage})
      .then(response => {
        //console.log(response.data);
          setMessages(messages => [...messages, { sender: 'bot', text: response.data.reply } ]);
      })
      .catch(error => console.error("Error:", error));
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['history.....', 'history.......', 'history.........'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex', height: '100vh', color:'black' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>ChatBot</Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}>
          {drawer}
        </Drawer>
        <Drawer variant="permanent" sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }} open>
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Toolbar />
        <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2  }}>
          {messages.map((msg, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start', mb: 2 }}>
              <Typography sx={{ p: 1, bgcolor: msg.sender === 'user' ? 'lightblue' : 'grey.600', borderRadius: 1, maxWidth: '75%' }}>
                {msg.text}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', p: 2, borderTop: '1px solid grey', alignItems:'baseline' }}>
          <TextField 
        fullWidth
          variant="outlined" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type your message..."
          onKeyDown={(e) => {if(e.key === 'Enter' && !e.shiftKey){
            sendMessage()
          }            
            }
        }
        multiline
        minRows={0}
        maxRows={4}
        sx={{
          flexGrow: 1,
          overflow: 'auto',
        }}
        />
            
          <Button className='absolute bottom-0' onClick={sendMessage} 
          sx={{ ml: 1, minWidth: '50px', height: '50px' }} 
          variant="contained">
            <SendIcon />
          </Button>
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
  );
}
