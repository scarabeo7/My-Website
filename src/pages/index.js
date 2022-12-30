import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import * as css from "../styles/layout.module.css";
import profile from "../images/thumbnail.jpeg";

//import Avatar from 'avataaars'
/* eslint-disable */

const index = () => {
  return (
    <div className={css.pageContainer}>
      <Header />
      <Layout>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <img src={profile} alt="my profile picture" className={css.image} />
        <div>
          <p className={css.intro}>Hi there, this is Chizim </p>
          <p className={css.industrySkills}>
            A Platform Engineer who enjoys cloud architecture and automation
          </p>
        </div>
        <div className={css.skillsContainer}>
          <i class="devicon-git-plain-wordmark colored" />
          <i class="devicon-github-original-wordmark colored" />
          <i class="devicon-nodejs-plain-wordmark colored" />
          <i class="devicon-linux-plain colored"></i>
          <i class="devicon-amazonwebservices-plain-wordmark colored" />
          <i class="devicon-kubernetes-plain-wordmark colored" />
          <i class="devicon-terraform-plain-wordmark colored" />
          <i class="devicon-azure-plain colored" />
          <i class="devicon-docker-plain colored" />
          <i class=" devicon-circleci-plain-wordmark colored" />
          <i class="devicon-jenkins-line" />
          <i class="devicon-postgresql-plain colored" />
          <i class="devicon-javascript-plain" />
        </div>
      </Layout>
    </div>
  );
};

export default index;
