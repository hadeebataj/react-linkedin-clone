import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle, link) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>
          <a href={link}>{heading}</a>
        </h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Meta lays off 11,000+ workers",
        "Top news • 13,385 readers",
        "https://www.linkedin.com/news/story/meta-lays-off-11000-workers-5489820/"
      )}
      {newsArticle(
        "UK may struggle to fill 'jobs of future'",
        "Trending news • 12,733 readers",
        "https://www.linkedin.com/news/story/uk-may-struggle-to-fill-jobs-of-future-5050521/"
      )}
      {newsArticle(
        "46% of workers mocked over accent",
        "3h ago • 30,892 readers",
        "https://www.linkedin.com/news/story/46-of-workers-mocked-over-accent-5035945/"
      )}
      {newsArticle(
        "Firms post jobs for ex-Twitter staff",
        "3h ago • 11,510 readers",
        "https://www.linkedin.com/news/story/firms-post-jobs-for-ex-twitter-staff-6066274/"
      )}
    </div>
  );
}

export default Widgets;
