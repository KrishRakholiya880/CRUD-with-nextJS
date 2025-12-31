export const getRobots = ({ index = true, follow = true }) => {
  return {
    index: index,
    follow: follow,
    googleBot: {
      index: index,
      follow: follow,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
};
