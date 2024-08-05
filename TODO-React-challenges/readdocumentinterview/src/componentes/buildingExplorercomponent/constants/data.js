export const data = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "App.js",
          isFolder: false,
        },
        {
          name: "index.js",
          isFolder: false,
        },
        {
          name: "styles.css",
          isFolder: false,
        },
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "Explorer.jsx",
              isFolder: false,
            },
          ],
        },
        {
          name: "constants",
          isFolder: true,
          items: [
            {
              name: "data.js",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};
