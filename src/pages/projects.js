import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import * as css from "../styles/layout.module.css";

const projects = () => {
  return (
    <div>
      <Header />
      <Layout>
        <h2 style={{ color: `rgb(98, 0, 255)` }}>Projects</h2>
        <p id={css.projects}>
          <ul>
            <li>
              Built a REST API backend with AWS S3 and NodeJS Express following
              good engineering and security best practices for a charity
              website. See source code
              <a
                href="https://github.com/scarabeo7/dev-ninjas-uchi"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;here
              </a>
              &nbsp;and website
              <a
                href="https://dev-ninjas-uchi.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;here
              </a>
            </li>
            <li>
              Followed a nanodegree course on Udacity to learn and deploy
              infrastructure components that provide security and services to
              servers by writing scripts using CloudFormation (AWS tool for IAC)
              and set up CI/CD pipeline using Git/GitHub, CircleCI for
              automation process. See source code
              <a
                href="https://github.com/scarabeo7/Udagram-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;here
              </a>
            </li>
            <li>
              A wep app project using pure HTML, CSS and Javascript, that shows
              details of all episodes of a TV show. The data is fetched from a
              REST API 'TV MAZE'. See source code
              <a
                href="https://github.com/scarabeo7/tv-show-dom-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;here
              </a>
              &nbsp;and website
              <a
                href="https://cyf-scarabeo7-tv.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;here
              </a>
            </li>
            <li>
              Created a React app that integrates with a REST Countries API to
              fetch Country data and display information about each of the
              Countries. See source code
              <a
                href="https://github.com/scarabeo7/countries-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;here
              </a>
              &nbsp;and website
              <a
                href="https://cyf-scarabeo7-countries-react.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;here
              </a>
            </li>
            <li>
              My personal website repo -
              <a
                href="https://github.com/scarabeo7/My-Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;click here
              </a>
            </li>
          </ul>
        </p>
      </Layout>
    </div>
  );
};

export default projects;
