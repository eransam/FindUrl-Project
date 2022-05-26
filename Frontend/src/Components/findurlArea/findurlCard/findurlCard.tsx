import React, { SyntheticEvent, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UrlService from '../../../Services/findUrlService';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

interface UrlCardProps {
    url: any;
  }


//פונ' אשר מקבלת חופשה כפרמטר
export default function RecipeReviewCard(props: UrlCardProps): JSX.Element {
    console.log("eran test");
    
    const [Theurl, setTheurl] = useState<any[]>([]);


    //שזאת אומרת שהמשתמש  true של החופשה שהוכנסה הוא  isFollowing בעת טעינת הקומפוננטה אנו נבדוק האם הפרופרטי 
    //true ל isFollow בעצם עוקב אחר החופשה הזו אנו נשתה את ערך המשתנה שלנו 
   // useEffect(() => {
      //  UrlService.findurl()
       // .then(urls => setTheurl(urls))
     // }, []);

     // console.log("Theurl: " , Theurl);
      

    
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };  


  return (

    <div className="BoxCard">

    <Card>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.url}
        </Typography>
    </Card>
    </div>
  );
}
