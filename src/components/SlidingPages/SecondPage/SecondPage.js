import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TwoColumn from '../LayoutHelpers/TwoColumn/TwoColumn';

import SecondPagestyles from "./second-page-styles";
import appColors from '../../../colors';

const SecondPage = ({campaign, updateCampaign}) => (
    <SecondPagestyles className="page">
            <h2>Define Influencer Delivarables</h2>
            <h5>0 of 2 Complete</h5>
            <div className="page-container">
                {/* Avatar and Name */}
                <Grid container justify="flex-start">
                    <Avatar style={{margin: '5px', color: '#fff', backgroundColor: appColors.primary}}>GV</Avatar>
                    <span style={{padding: '15px', fontWeight: 'bold'}}>{campaign.author}</span>
                </Grid>

                <hr/>
                {/* Influencer Fee Section */}
                <TwoColumn>
                    <div className="two-thirds-column">
                        <Typography variant="h5" component="h2">Influencer Fee</Typography>
                        <Typography variant="subtitle1">How much are you paying {campaign.author.split(" ")[0]} for the agreed delivarables?</Typography>
                    </div>
                    <div className="one-third-column">
                        <Input label="Influencer Fee" value={campaign.influencer_fee} startAdornment={<InputAdornment position="start">£</InputAdornment>}/>
                    </div>
                </TwoColumn>

                <TwoColumn>
                    <div className="two-thirds-column">
                        <Typography variant="h5" component="h2">Usage Fee</Typography>
                        <Typography variant="subtitle1">Are you paying {campaign.author.split(" ")[0]} a usage fee for this content?</Typography>
                    </div>
                    <div className="one-third-column">
                        <Input value={campaign.usage_fee} startAdornment={<InputAdornment position="start">£</InputAdornment>}/>
                    </div>
                </TwoColumn>

                <TwoColumn>
                    <div className="two-thirds-column">
                        <Typography variant="h5" component="h2">Total Fee:</Typography>
                    </div>
                    <div className="one-third-column">
                        <span>£ {campaign.influencer_fee + campaign.usage_fee}</span>
                    </div>
                </TwoColumn>

                <hr/>
                {/* Social Media Section */}
                <TwoColumn>
                    <div className="two-thirds-column">
                        <Typography variant="h5" component="h2">Social delivarables</Typography>
                        <Typography variant="subtitle1">What posts have you asked {campaign.author.split(" ")[0]} to do?</Typography>
                    </div>
                </TwoColumn>

                {/* INSTAGRAM */}
                <TwoColumn>
                    <div className="two-thirds-column">
                        <Typography variant="subtitle1">INSTAGRAM</Typography>
                    </div>
                </TwoColumn>
                {
                    campaign.social_delivarables.instagram.map((instagramItem,index) => {
                        return (
                            <TwoColumn key={index}>
                                <div className="half-column">
                                    <TextField label="Type" fullWidth value={instagramItem.type} margin="normal" variant="outlined"/>
                                </div>
                                <div className="half-column">
                                    <TextField label="Date" fullWidth value={instagramItem.date} margin="normal" variant="outlined"/>
                                </div>
                            </TwoColumn>
                        )
                    })
                }
                <TwoColumn>
                    <div className="two-thirds-column">
                        <Button color="primary" id="update-insta" onClick={updateCampaign} variant="outlined">
                            <AddIcon />
                            Add Post
                        </Button>
                    </div>
                </TwoColumn>

                {/* YOUTUBE */}
                <TwoColumn>
                    <div className="two-thirds-column">
                        <Typography variant="subtitle1">YOUTUBE</Typography>
                    </div>
                </TwoColumn>
                {
                    campaign.social_delivarables.youtube.map((youtubeItem,index) => {
                        return (
                            <TwoColumn key={index}>
                                <div className="half-column">
                                    <TextField label="Type" fullWidth value={youtubeItem.type} margin="normal" variant="outlined"/>
                                </div>
                                <div className="half-column">
                                    <TextField label="Date" fullWidth value={youtubeItem.date} margin="normal" variant="outlined"/>
                                </div>
                            </TwoColumn>
                        )
                    })
                }
                <TwoColumn>
                    <div className="two-thirds-column">
                        <Button color="primary" id="update-youtube" onClick={updateCampaign} variant="outlined">
                            <AddIcon />
                            Add Post
                        </Button>
                    </div>
                </TwoColumn>

                {/* Facebook */}
                <TwoColumn>
                    <div className="two-thirds-column">
                        <Typography variant="subtitle1">FACEBOOK</Typography>
                    </div>
                </TwoColumn>
                {
                    campaign.social_delivarables.facebook.map((facebookItem,index) => {
                        return (
                            <TwoColumn key={index}>
                                <div className="half-column">
                                    <TextField label="Type" fullWidth value={facebookItem.type} margin="normal" variant="outlined"/>
                                </div>
                                <div className="half-column">
                                    <TextField label="Date" fullWidth value={facebookItem.date} margin="normal" variant="outlined"/>
                                </div>
                            </TwoColumn>
                        )
                    })
                }
                <TwoColumn>
                    <div className="two-thirds-column">
                        <Button color="primary" id="update-facebook" onClick={updateCampaign} variant="outlined">
                            <AddIcon />
                            Add Post
                        </Button>
                    </div>
                </TwoColumn>

                {/* Other */}
                <TwoColumn>
                    <div className="two-thirds-column">
                        <Typography variant="subtitle1">OTHER SOCIAL MEDIA</Typography>
                    </div>
                </TwoColumn>
                <TwoColumn>
                    <div className="half-column">
                        {
                            campaign.social_delivarables.other.map((otherItem,index) => {
                                return (
                                    <TextField key={index}  label="Type" fullWidth value={otherItem} margin="normal" variant="outlined"/>
                                )
                            })
                        }
                    </div>
                    <div className="half-column">
                        <p>*We're unable to track these social networks at the moment, but we will take these into account when we break down campaign spend.</p>
                    </div>
                </TwoColumn>
                <TwoColumn>
                    <div className="two-thirds-column">
                        <Button color="primary" id="update-other" onClick={updateCampaign} variant="outlined">
                            <AddIcon />
                            Add Social Network
                        </Button>
                    </div>
                </TwoColumn>

                <hr/>
                {/* Other Paid Content */}
                <TwoColumn>
                    <div className="two-thirds-column">
                        <Typography variant="h5" component="h2">Other Paid Content</Typography>
                        <Typography variant="subtitle1">Have you asked {campaign.author.split(" ")[0]} to create any futher content?</Typography>
                    </div>
                </TwoColumn>

                <FormGroup style={{padding: '2em 2em 0em 2em'}} row>
                    {
                        campaign.other_paid_content.map((otherContent,index) => {
                            return (
                                <FormControlLabel key={index}
                                    control={
                                    <Checkbox color="primary" checked={otherContent.value} value={otherContent.name} />
                                    }
                                    label={otherContent.name}
                                />
                            )
                        })
                    }
                </FormGroup> 
                <TwoColumn>
                    <div className="full-column">
                        <TextField placeholder="Some form of paid content"  fullWidth margin="normal" variant="outlined"/>    
                    </div>
                </TwoColumn>
                
                <hr/>

                <TwoColumn>
                    <div  className="full-column">
                        <Button style={{margin: '1em', float: 'right'}} variant="outlined" color="primary">
                            Save
                        </Button> 
                        <Button style={{margin: '1em', float: 'right'}} variant="outlined">
                            Cancel 
                        </Button>
                    </div>
                </TwoColumn>

            </div>
          </SecondPagestyles>
)

export default SecondPage;