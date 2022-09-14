import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ChannelDetailCard({ data, data2 }) {
  console.log('data2',data2);
  const [expanded, setExpanded] = React.useState(false);

  const [pageSize, setPageSize] = React.useState(5);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const nameStrAray = data.name.split(" ");
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {nameStrAray[0].substring(0,1)}{nameStrAray[1].substring(0,1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image= {data.image}
        alt={data.name}
      />
     
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>

{ 
data2.map((msg) => {  
  return ( <>
 <div style={{display: "flex",flexDirection:"row",marginTop:"10px"}}>
 <img style={{ height: "40px", width: "40px", borderRadius: "40px"}} src={msg.attributes.avtar_pic_url || '../../images/collectors/1.png'}/>
  <div style={{marginLeft:"10px"}}>
    <Typography variant="body2" color="#f44336">
      { msg.attributes.username}
    </Typography>
    <Typography variant="body2" color="#999" fontSize={10}>
      { msg.attributes.createdAt}
    </Typography>
    <Typography variant="body2" color="#333" fontSize={12}>
     { msg.attributes.content }
    </Typography>
  </div>
</div>


</> )
 
 })
}
   
</CardContent>
      </Collapse>
    </Card>
  );
}
