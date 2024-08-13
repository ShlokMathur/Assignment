// src/components/Tooltip.js
import React from 'react';
import { Tooltip } from 'react-tooltip';

const CustomTooltip = ({ topic }) => (
  <>
    <span data-tooltip-id="tooltip" data-tooltip-content={topic}></span>
    <Tooltip id="tooltip" />
  </>
);

export default CustomTooltip;
