export default{
  data: () => ({
    open: ['src'],
    open2: ['task'],
    files: {
      html: 'fa-html5',
      js: 'fa-file-code-o',
      json: 'fa-file-code-o',
      png: 'fa-picture-o',
      txt: 'fa-file-text',
    },
    tree: [],
    tree2: [],
    items2:[
      {
        name:"components",
        children:[
          {
            name:"task",
            children:[
              {
                name:"task.vue",
                file:"txt"
              },
              {
                name:"task.js",
                file:"js"
              },
              {
                name:"task.css",
                file:"txt"
              }
            ]
          }
        ]
      },
    ],
    items: [
      {
        name:"new-project",
        children: [
          {
            name: '.git'
          },
          {
            name: 'node_modules'
          },
          {
            name: 'public',
            children: [
              {
                name: 'favicon.ico',
                file: 'png'
              },
              {
                name: 'index.html',
                file: 'html'
              }
            ]
          },
          {
            name:"src",
            children:[
              {
                name:"assets",
                children:[
                  {
                    name:"logo.png",
                    file:"png"
                  }
                ]
              },
              {
                name:"components"
              },
              {
                name:"plugins",
                children:[
                  {
                    name:"vuetify.js",
                    file:"txt"
                  }
                ]
              },
              {
                name:"App.vue",
                file:"txt"
              },
              {
                name:"main.js",
                file:"js"
              },
              {
                name:"router.js",
                file:"js"
              },
              {
                name:"store.js",
                file:"js"
              },
            ]
          },
          {
            name: '.gitignore',
            file: 'txt'
          },
          {
            name: 'babel.config.js',
            file: 'js'
          },
          {
            name: 'package.json',
            file: 'json'
          },
          {
            name: 'README.md',
            file: 'txt'
          }
        ]
      }
    ]
  })
}