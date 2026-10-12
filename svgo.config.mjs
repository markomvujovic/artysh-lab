// Used for optimizing SVGs exported from Figma: `npx svgo -r public`
const config = {
  plugins: [
    {
      name: "preset-default",
      params: { overrides: { removeViewBox: false } },
    },
  ],
};

export default config;
