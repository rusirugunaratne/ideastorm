import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets-article">
            <div className="widgets-article-left">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets-article-right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets-header">
                <h2>IdeaStorm News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Musk recommends voting GOP, bans Twitter accounts for ‘impersonation’", "New Twitter owner Elon Musk tweeted Monday encouraging “independent-minded voters” to vote Republican, marking a major...")}
            {newsArticle("Hurricane watch issued for Florida east coast for Subtropical Storm Nicole", "The National Hurricane Center has issued a hurricane watch for Florida’s east coast from the Brevard-Volusia county...")}
            {newsArticle("Matthew Perry Candidly Opened Up About Feeling Emotionally Numb And “Dead Inside” While...", "“I couldn’t tell if that was because of the opioid buprenorphine I was taking, or if I was just...")}
        </div>

    )
}

export default Widgets