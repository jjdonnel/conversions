const menuOptions = [
    {
        title: "Home",
        path: "/",
    },

    {
        title: "Length",
        path: "/length",
    },

    {
        title: "Meteorology",
        subOptions: [
            {
                title: "Temperature",
                path: "/temperature",
            },
        
            {
                title: "Pressure",
                path: "/pressure",
            }
        ]
    },

    {
        title: "Circle",
        path: "/circle",
    },

    {
        title: "Fluid",
        path: "/fluid",
    },
]

export default menuOptions;