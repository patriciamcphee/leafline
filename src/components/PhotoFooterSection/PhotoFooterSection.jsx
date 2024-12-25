import React from "react";
import { Button } from "../../components/Button";
import "./style.css";

export const PhotoFooterSection = () => {
  return (
    <div className="photo-footer-section">
      <div className="footer-section">
        <div className="contents">
          <div className="company-logo-text">
            <div className="div">
              <img
                className="logo-color"
                alt="Logo color"
                src="/img/logo-color-1.png"
              />

              <div className="text">
                <p className="stay-updated-with">
                  Stay updated with our latest
                  <br />
                  projects and gardening tips.
                </p>
              </div>
            </div>

            <div className="newsletter-email">
              <div className="contents-2">
                <p className="text-wrapper">Enter your email address ...</p>

                <img
                  className="arrow-icon"
                  alt="Arrow icon"
                  src="/img/arrow-icon.svg"
                />
              </div>
            </div>
          </div>

          <div className="menu">
            <div className="div-2">
              <div className="text-wrapper-2">SUPPORT</div>

              <div className="items">
                <div className="text-wrapper-3">FAQ</div>

                <div className="text-wrapper-4">USER GUIDE</div>

                <div className="text-wrapper-4">TESTIMONIAL</div>

                <div className="text-wrapper-4">CUSTOMER</div>
              </div>
            </div>

            <div className="div-2">
              <div className="text-wrapper-2">LINKS</div>

              <div className="items">
                <div className="text-wrapper-3">ABOUT US</div>

                <div className="text-wrapper-4">STORIES</div>

                <div className="text-wrapper-4">PROJECTS</div>

                <div className="text-wrapper-4">BLOG</div>
              </div>
            </div>

            <div className="div-2">
              <div className="text-wrapper-2">SERVICES</div>

              <div className="items">
                <div className="text-wrapper-3">HOME GARDEN</div>

                <div className="text-wrapper-4">PLANT SELECTION</div>

                <div className="text-wrapper-4">HARDSCAPING</div>

                <div className="text-wrapper-4">PUBLIC GARDEN</div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p className="p">COURTESY © 2023. ALL RIGHTS RESERVED.</p>

          <p className="PRIVACY-POLICY-TERMS">
            PRIVACY POLICY&nbsp;&nbsp; |&nbsp;&nbsp; TERMS &amp; CONDITION
          </p>
        </div>
      </div>

      <div className="photo">
        <div className="contents-3">
          <div className="tags-title">
            <div className="tags">
              <div className="div-3">
                <Button
                  className="button-instance"
                  property1="ver-3"
                  text="Home"
                />
                <Button
                  className="design-component-instance-node"
                  property1="ver-3"
                  text="Garden"
                />
              </div>

              <div className="div-3">
                <Button
                  className="button-instance"
                  property1="ver-3"
                  text="Landscape Design"
                />
                <Button
                  className="design-component-instance-node"
                  property1="ver-3"
                  text="Expert"
                />
              </div>
            </div>

            <p className="MAKE-YOUR-DREAM">
              <span className="span">MAKE YOUR </span>

              <span className="text-wrapper-5">
                DREAM
                <br />
                GARDEN
              </span>

              <span className="span"> INTO REALITY</span>
            </p>
          </div>

          <img className="img" alt="Button" src="/img/button.svg" />
        </div>
      </div>
    </div>
  );
};
