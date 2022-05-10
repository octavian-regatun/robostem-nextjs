import type { NextPage } from "next";
import * as React from "react";
import PageContent from "../src/components/PageContent";
import Layout from "../src/components/Layout";
import { Typography } from "@mui/material";
import { HOME_IMAGE } from "../src/utilities/constants/images";

const Home: NextPage = () => {
  return (
    <Layout>
      <PageContent title="Introduction">
        <img src={HOME_IMAGE} alt="home" style={imageStyle} />
        <Typography variant="body1" align="justify">
          &emsp;Welcome to the ROBOSTEM Erasmus+ Project. The aim of this
          project is that of fostering the take up of STEM subjects through the
          expoitaiton of STEM skills. Integrating microcontrollers in the modern
          class and boosting interest in the STEM subjects allows for a more
          practical viewpoint onto the teaching-learning process in training
          institutes.
        </Typography>
        <Typography variant="body1" align="justify">
          &emsp;It also encompasses and is applicable to the modern day
          technology of flipped classroom which allows students to start the
          learning process from the result/the output and go backwards in search
          of its process.
        </Typography>
      </PageContent>
    </Layout>
  );
};

const imageStyle = {
  width: "40%",
  minWidth: "200px",
  maxWidth:'400px',
  display: "block",
  margin: "0 auto 2rem auto",
};

export default Home;
