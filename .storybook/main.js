module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
        },
      ],
    });

    config.module.rules
      .filter((rule) => rule?.test?.test(".css"))
      .map((rule) => {
        console.log("===========================================");
        console.log(rule.test);
        rule.use.map((u) => console.log(u));
      });

    return config;
  },
};
