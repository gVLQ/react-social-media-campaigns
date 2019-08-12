import React from 'react';
import TextField from "@material-ui/core/TextField";

import FirstPageStyles from "./first-page-styles";

const FirstPage = ({campaign}) => (
    <div className="page">
        <h2>Describe Campaign</h2>
        <div className="page-container">
        <TextField
            multiline
            rows="20"
            placeholder="What's this about?"
            value={campaign.description}
            style={{margin: '5%', width: '90%'}}
            margin="normal"
        />
        </div>
    </div>
)

export default FirstPage;