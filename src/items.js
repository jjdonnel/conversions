
export const options = [
    {
        title: 'Home',
        path: '/'
    },

    {
        title: 'Physics',
        children: [
            {
                title: 'Distance',
                path: '/distance'
            },

            {
                title: 'Fluid',
                path: '/fluid'
            },

            {
                title: 'Derived',
                children: [
                    {
                        title: 'Speed',
                        path: '/Speed'
                    },

                    {
                        title: 'Weight',
                        path: '/weight'
                    }
                ]
            }
        ]
    },
    
    {
        title: "Time",
        path: "/Time"
    },
    
    {
        title: 'Geometry',
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
    },

    {
        title: 'Meteorology',
        children: [
            {
                title: 'Temperature',
                path: '/temperature'
            },

            {
                title: 'Pressure',
                path: '/pressure'
            },

            {
                title: 'Cloud Base',
                path: '/cloudBase'
            }
        ]
    }
];

