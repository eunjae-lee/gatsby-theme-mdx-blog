module.exports = {
  monorepo: {
    readVersionFrom: 'package.json',
    packagesToBump: ['packages/*', 'examples/*'],
    packagesToPublish: ['packages/*'],
  },
  versionUpdated: ({ version, dir, exec }) => {
    exec(`npx json -I -f package.json -e 'this.version = "${version}"'`);
    exec(`yarn workspace blog add gatsby-theme-mdx-blog@${version}`);
    exec(
      `yarn workspace tailwind add gatsby-theme-mdx-tailwind-blog@${version}`
    );
  },
};
