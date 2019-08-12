import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import CampaignsStyles from "./campaigns-styles";

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

function useCampaigns() {

    const [campaigns, setCampaigns] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('campaigns')
            .onSnapshot((snapshot) => {
                const newCampaigns = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setCampaigns(newCampaigns);
            })
    }, [])

    return campaigns;
}

const Campaigns = () => {

    const classes = useStyles();
    const campaigns = useCampaigns();

    return (
    <CampaignsStyles>
        {
            campaigns.map((campaign) => 
            <Card key={campaign.id} className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {campaign.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        by {campaign.author}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {campaign.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/campaigns/${campaign.id}`}><Button variant="outlined" size="small">See Campaign</Button></Link>
                </CardActions>
            </Card>
            ) 
        }
    </CampaignsStyles>
)}

export default Campaigns;