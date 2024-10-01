import React from 'react'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

const actions = [
  {
    icon: <InstagramIcon />,
    name: 'Instagram',
    url: 'https://instagram.com/rianbritto_',
  },
  {
    icon: <LinkedInIcon />,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/rianbritto',
  },
  { icon: <GitHubIcon />, name: 'GitHub', url: 'https://github.com/RixelLitz' },
  {
    icon: <WhatsAppIcon />,
    name: 'WhatsApp',
    url: 'https://wa.me/53997105226',
  },
]

const FixedSpeedDial = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              window.open(action.url, '_blank')
              handleClose()
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}

export default FixedSpeedDial
