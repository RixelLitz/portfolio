import type React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import { GitHub, Launch } from '@mui/icons-material' // Importando ícones

// Define as props do componente
interface MediaCardProps {
  image: string
  title: string
  description: string
  codeLink: string
  deployLink: string
  technologies: string[]
}

const MediaCard: React.FC<MediaCardProps> = ({
  image,
  title,
  description,
  codeLink,
  deployLink,
  technologies,
}) => {
  return (
    <Card
      className="hover:scale-110 transition-all"
      sx={{
        maxWidth: 400,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', // Sombra preta
        transition: 'box-shadow 0.3s ease-in-out', // Efeito suave na sombra
      }}
    >
      <CardMedia
        sx={{
          height: 250,
          borderRadius: 2,
        }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          {title}
          {technologies.map((tech, index) => (
            <Chip
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              label={tech}
              variant="outlined"
              sx={{
                ml: 1,
                bgcolor: 'black',
                color: 'white',
                fontSize: '0.5rem', // Diminuindo o tamanho da fonte
                padding: '2px 4px', // Ajustando o padding
                height: '20px', // Ajustando a altura do chip
              }}
            />
          ))}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <Button
            size="small"
            sx={{
              backgroundColor: 'purple', // Fundo roxo
              color: 'white', // Texto branco
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'darkviolet', // Efeito ao passar o mouse
              },
            }}
          >
            <GitHub sx={{ mr: 0.5 }} /> Código
          </Button>
        </a>
        <a href={deployLink} target="_blank" rel="noopener noreferrer">
          <Button
            size="small"
            sx={{
              backgroundColor: 'purple', // Fundo roxo
              color: 'white', // Texto branco
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'darkviolet', // Efeito ao passar o mouse
              },
            }}
          >
            <Launch sx={{ mr: 0.5 }} /> Deploy
          </Button>
        </a>
      </CardActions>
    </Card>
  )
}

export default MediaCard
