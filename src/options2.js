export const options = [

    {
      title: "Distance",
      path: "/distance"
    },
  
    {
      title: "Speed",
      path: "/speed"
    },
  
    {
      title: "Weight",
      path: "/weight"
    },
  
    {
      title: "Shapes",
      path: "#",
      children: [
          {
              title: 'Circle',
              path: '/circle'
          },
  
          {
              title: 'Rectangle',
              path: '/rectangle',
              children: [
                {
                    title: 'Circle',
                    path: '/circle'
                },

                {
                    title: 'Circle',
                    path: '/circle'
                },
              ]
          },
          {
              title: 'Triangle',
              path: '/triangle'
          },
      ]
    },  
  
    {
        title: "Temperature",
        path: "/temperature"
      },
  
      {
        title: "Pressure",
        path: "/pressure"
      },
  
      {
        title: "Fluid",
        path: "/fluid",
        children: [
            {
                title: 'Circle',
                path: '/circle',
                children: [
                    {
                        title: 'Circle',
                        path: '/circle'
                    },
    
                    {
                        title: 'Circle',
                        path: '/circle'
                    },
                  ]
            },

            {
                title: 'Circle',
                path: '/circle'
            },
          ]
      },  

    {
      title: "Fluid",
      path: "/fluid"
    }
    
];