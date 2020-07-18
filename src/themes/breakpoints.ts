const size = {
  mobileS: '413px',
  mobile: '767px',
  tablet: '1023px',
  laptop: '1279px',
  desktop: '1770px',
};

const breakpoints = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export default breakpoints;
