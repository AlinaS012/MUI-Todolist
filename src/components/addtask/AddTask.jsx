import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import IconifyIcon from "../base/IconifyIcon";

const AddTask = ({ sx }) => {
    const [open, setOpen] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openDd = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [plus, setPlus] = React.useState(false)
    if (!open) {
        return (<Box sx={{ ...sx, mt: 5 }} onClick={() => setOpen(true)} onMouseEnter={() => setPlus(true)} onMouseLeave={() => setPlus(false)}>
            {/* <Typography color="red" fontSize={26}>+</Typography> */}
            <Box>{!plus ? <IconifyIcon sx={{ fontSize: 30, color: '#dc4c3e' }} icon="ic:round-plus" /> : <IconifyIcon color='#dc4c3e' sx={{ fontSize: 30 }} icon="pepicons-pencil:plus-circle-filled" />}</Box>
            <Typography color="gray" fontSize={16}>Add Task</Typography>
        </Box>)
    } else {
        return (
            <Box sx={{
                border: '1px solid #d3d3d3', borderRadius: '1rem',
                width: { sx: '90%', md: '90%', lg:'90%',//lg: '75%' 

                }, margin: '0 auto', my: 2, px: 1,
            }}>
                <Box sx={{ borderBottom: '1px solid #d3d3d3', display: 'flex', px: 1, ...sx, flexDirection: 'column', alignItems: "flex-start", width: '100%' }}>
                    <Box sx={{ padding: "1.5rem 1.5rem", pb: 1 }}><Typography color="#d3d3d3">Replace lightbulb tomorrow at 3pm</Typography></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                        <Button variant="contained" sx={{ padding: 0.3, fontSize: 10 }} color="info">Date<IconifyIcon sx={{ mt: 0.5, }} icon="mdi-light:calendar" /></Button>
                        <Button variant="contained" sx={{ padding: 0.3, fontSize: 10 }} color="info">Priority<IconifyIcon sx={{ mt: 0.5, }} icon="mdi-light:calendar" /></Button>
                        <Button variant="contained" sx={{ padding: 0.3, fontSize: 10 }} color="info">Reminders<IconifyIcon sx={{ mt: 0.5, }} icon="mdi-light:calendar" /></Button></Box>
                    <Box sx={{ borderRadius: '1rem', backgroundColor: "#fdf5e2", width: '100%', mb: 1, border: "1px solid #ccc", display: 'flex', flexDirection: 'row', padding: "2rem" }}>
                        <Box sx={{ flex: 1 }}>
                            <IconifyIcon sx={{ fontSize: 32 }} icon="material-symbols:target" />
                        </Box>
                        <Box sx={{ flex: 12 }}>
                            <Typography sx={{ fontSize: '1.1rem', fontWeight: 400 }} variant="h6">New: Deadlines</Typography>
                            <Typography sx={{ fontSize: '0.9rem', fontWeight: 300 }} color="gray" variant="h5">Stay on track by setting clear deadlines. Select a date to complete your tasks on time.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center', ...sx, mx: 0, px: 1.5, mb: 1, justifyContent: 'space-between', width: '100%'
                }}><Button
                    id="basic-button" variant="contained" color="info"
                    aria-controls={openDd ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openDd ? 'true' : undefined}
                    onClick={handleClick}
                >
                        # Home<IconifyIcon icon="raphael:arrowdown" />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openDd}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Routine</MenuItem>
                        <MenuItem onClick={handleClose}>Inspirations</MenuItem>
                        <MenuItem onClick={handleClose}>Home</MenuItem>
                    </Menu>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button title="Cancel" variant="contained" color="info" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button title="Add Task" variant="contained" color="primary" >Add Task</Button>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default AddTask;