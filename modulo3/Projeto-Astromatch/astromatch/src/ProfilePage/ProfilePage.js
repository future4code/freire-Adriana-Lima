import React, { useEffect, useState } from "react";
import CardProfile from "./CardProfile";
import Button from "./Button";
import axios from "axios";
import styled from 'styled-components';
import LinearIndeterminate from "./Loading";

const Loading = styled.div`
 margin-top: 200px;
`;


function ProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Adriana-Lima-Freire/person"
      )
      .then((response) => {
        setProfileToChoose(response.data.profile);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const chooseProfile = (choice) => {
    const body = {
      choice: choice,
      id: profileToChoose.id,
    };
    setProfileToChoose(undefined);
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Adriana-Lima-Freire/choose-person",
        body
      )
      .then((response) => {
        getProfileToChoose();
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const onClickNo = () => {
    chooseProfile(false);
  };

  const onClickYes = () => {
    chooseProfile(true);
  };

  return (
    <div>
      {profileToChoose ? (
        <>
          <CardProfile profile={profileToChoose} />
          <div>
          <Button onClickYes={onClickYes} onClickNo={onClickNo} />
          </div>
        </>
      ) : (
        <Loading>
        <LinearIndeterminate/>
        </Loading>
      )}
         
    </div>
  );
}

export default ProfilePage;