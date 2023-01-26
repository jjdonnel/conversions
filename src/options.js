export const geoOptions = [

  {
    title: "Distance",
    path: "/distance"
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
            path: '/rectangle'
        },
        {
            title: 'Triangle',
            path: '/triangle'
        },
    ]
  }

]

export const metOptions = [

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
      path: "/fluid"
    }
];

export const otherOptions = [

  // {
  //   title: "Home",
  //   path: "/home"
  // }
  {
    title: "Fluid",
    path: "/fluid"
  }
];
    // {
    //   title: "Meteorology",
    //   children: [
    //     {
    //       title: "Temperature",
    //       path: "/temperature"
    //     },
    
    //     {
    //       title: "Pressure",
    //       path: "/pressure"
    //     },
    //   ]
    // },
    //
  //    {
  //     title: "Temperature",
  //     path: "/temperature"
  //   },

  //   {
  //     title: "Pressure",
  //     path: "/pressure"
  //   },

  //   {
  //     title: "Fluid",
  //     path: "/fluid"
  //   }

  // ];

//   const options = [
//     <Link to='/'>Home</Link>,
//     <Link to='/Length'>Length</Link>,
//     <Link to='/temperature'>Temperature</Link>,
//     <Link to='/pressure'>Pressure</Link>,
//     <Link to='/circle'>Circle</Link>,
//     <Link to='/fluid'>Fluid</Link>
//   ];
