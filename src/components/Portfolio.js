import React from 'react';
import '../assets/css/meyawo.css';
import { animateScroll as scroll} from 'react-scroll';
const Portfolio = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

  return (
    <section className="section" id="portfolio">
      <div className="container text-center">
        <p className="section-subtitle">What I Did ?</p>
        <h6 className="section-title mb-6">Portfolio</h6>
        <div className="row">
          <div className="col-md-4">
            <div onClick={scrollToTop} className="portfolio-card">
              <img src="smartStock.svg" className="portfolio-card-img" alt="Portfolio 1" />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Smart Stock Project</h4>
                  <p className="font-weight-normal">About predict data using ML.</p>
                </span>
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-card">
              <img src="cat3.gif" className="portfolio-card-img" alt="Portfolio 2" />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Web Designing</h4>
                  <p className="font-weight-normal">Category: Web Templates</p>
                </span>
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-card">
              <img src="cat3.gif" className="portfolio-card-img" alt="Portfolio 3" />
              <span className="portfolio-card-overlay">
                <span className="portfolio-card-caption">
                  <h4>Web Designing</h4>
                  <p className="font-weight-normal">Category: Web Templates</p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
