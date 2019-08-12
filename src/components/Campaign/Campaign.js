import React, { useState, useEffect } from "react";

import FirstPage from "../SlidingPages/FirstPage/FirstPage";
import SecondPage from "../SlidingPages/SecondPage/SecondPage";

import firebase from "../../firebase";

import SlidingPage from "../SlidingPage/SlidingPage";
import SlidingNav from "../SlidingNav/SlidingNav";

import CampaignStyles from "./campaign-styles";



const Campaign = ({ match }) => {

  let [campaign, setCampaign] = useState({
    id: 1,
    title: "",
    description: "",
    author: "",
    social_delivarables: {
      instagram: [
        {
          type: "",
          date: ""
        }
      ],
      youtube: [
        {
          type: "",
          date: ""
        }
      ],
      facebook: [
        {
          type: "",
          date: ""
        }
      ],
      other: [""]
    },
    other_paid_content: [
      {
        name: "",
        value: false
      }
    ]
  });

  function useCampaigns(id) { 
    useEffect(() => {
      firebase
        .firestore()
        .collection("campaigns")
        .doc(id)
        .get()
        .then(doc => {
          const newCampaign = doc.data();
          setCampaign(newCampaign);
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    }, [id]);
  
    return campaign;
  }

  function updateCampaign(data) {
    const newCampaign = campaign;
    if (data.currentTarget.id === "update-insta") {
      newCampaign.social_delivarables.instagram.push({ type: "", date: "" });
      setCampaign({ ...newCampaign });
    } else if (data.currentTarget.id === "update-youtube") {
      newCampaign.social_delivarables.youtube.push({ type: "", date: "" });
      setCampaign({ ...newCampaign });
    } else if (data.currentTarget.id === "update-facebook") {
      newCampaign.social_delivarables.facebook.push({ type: "", date: "" });
      setCampaign({ ...newCampaign });
    } else if (data.currentTarget.id === "update-other") {
      newCampaign.social_delivarables.other.push("");
      setCampaign({ ...newCampaign });
    }
  }

  campaign = useCampaigns(match.params.campaign);

  const buttons = [
    <button className="nav-button left-button" />,
    <button className="nav-button right-button" />
  ];

  
  return (
    <CampaignStyles>
      <div className="campaign-header">
        <h1>Edit Campaign</h1>
      </div>

      <SlidingNav buttons={buttons}>
        {/* First Page  */}
        <SlidingPage>
          <FirstPage campaign={campaign} updateCampaign={updateCampaign} />>
        </SlidingPage>
        {/* Second Page  */}
        <SlidingPage>
          <SecondPage campaign={campaign} updateCampaign={updateCampaign} />
        </SlidingPage>
        {/* Third Page  */}
        <SlidingPage>
          <div className="page">
            <h2>Set Campaign Goals</h2>
            <div className="page-container">Another page...</div>
          </div>
        </SlidingPage>
      </SlidingNav>
    </CampaignStyles>
  );
};

export default Campaign;
