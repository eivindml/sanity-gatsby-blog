export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "634eace883fa50789d8ae29c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4qtfoepa",
                  apiId: "94cad1e6-1f37-4e4e-af0f-b4a947335e69",
                },
                {
                  buildHookId: "634eace8a71b5c6a7923475f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-75xe63iz",
                  apiId: "7e795163-068e-4ff9-9548-2d5f8073fc07",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/eivindml/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-75xe63iz.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
