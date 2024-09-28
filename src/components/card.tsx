import type React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

// Define as props do componente
interface MediaCardProps {
  image: string;
  title: string;
  description: string;
  codeLink: string;
  deployLink: string;
  technologies: string[];
}

const MediaCard: React.FC<MediaCardProps> = ({ 
  image, 
  title, 
  description, 
  codeLink, 
  deployLink, 
  technologies 
}) => {
  return (
    <Card className="hover:scale-110 transition-all" sx={{ maxWidth: 400 }}>
      <CardMedia sx={{ height: 250 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
          {title}
          {technologies.map((tech, index) => (
            <Chip 
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index} 
              label={tech} 
              variant="outlined" 
              sx={{ 
                ml: 1, 
                bgcolor: 'purple', 
                color: 'white', 
                fontSize: '0.625rem', // Diminuído ainda mais
                padding: '2px 4px' // Ajustando o padding
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
          <Button size="small">Veja o código</Button>
        </a>
        <a href={deployLink} target="_blank" rel="noopener noreferrer">
          <Button size="small">Deploy do projeto</Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
