const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(
    `https://api.github.com/users/debtcollective/repos`
  )
  const resultData = await result.json()
  // create node for build time data example in the docs
  createNode({
    repositories: resultData,
    // required fields
    id: `build-repo`,
    parent: null,
    children: [],
    internal: {
      type: `Repo`,
      contentDigest: createContentDigest(resultData),
    },
  })
}
