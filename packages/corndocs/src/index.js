const frontmatter = require("remark-frontmatter");
const gfm = require("remark-gfm");

const extension = /\.tsx$/;

const corndocs = (corndocsConfig) =>
  function withCorndocs(nextConfig = {}) {
    return {
      ...nextConfig,
      webpack(config, options) {
        config.module.rules.push(
          {
            test: extension,
            issuer: (request) => !!request,
            use: [
              options.defaultLoaders.babel,
              {
                loader: require.resolve("../loader"),
                options: {
                  corndocsConfig: corndocsConfig,
                },
              },
            ],
          },
          {
            test: /\.mdx?$/,
            use: [
              options.defaultLoaders.babel,
              {
                loader: require.resolve("@mdx-js/loader"),
                options: {
                  remarkPlugins: [frontmatter, gfm],
                  providerImportSource: "@mdx-js/react",
                },
              },
            ],
          }
        );

        if (typeof nextConfig.webpack === "function") {
          return nextConfig.webpack(config, options);
        }

        return config;
      },
    };
  };

module.exports = corndocs;
