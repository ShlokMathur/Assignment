// src/components/ReviewHighlighter.js
import React from 'react';
import CustomTooltip from './Tooltip';

const ReviewHighlighter = ({ review }) => {
  const highlightSentence = (sentence, sentiment, topic) => {
    const sentimentColors = {
      Positive: '#D9F2DD',
      Negative: '#F2DBD9',
      Mixed: '#e8bd6d3d',
      Neutral: '#eaf09b6b',
    };

    return (
      <span style={{ backgroundColor: sentimentColors[sentiment] }} data-tooltip-id="tooltip" data-tooltip-content={topic}>
        {sentence}
        <CustomTooltip topic={topic} />
      </span>
    );
  };

  return (
    <div>
      <h3>{review.reviewer_name} ({review.date})</h3>
      <p>
        {review.analytics.map((item, index) => (
          <React.Fragment key={index}>
            {highlightSentence(item.sentences[0], item.sentiment, item.topic)}{' '}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default ReviewHighlighter;
