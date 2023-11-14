module.exports = {
  siteTitle: 'Sushank Sharma | Embedded Systems Post-Graduate Student | Software Developer',
  siteDescription:
    'Sushank Sharma is a Embedded Systems Post-Graduate Student at MAHE, Manipal University, Aspiring Coder.',
  siteKeywords:
    'Sushank Sharma, Sushank, Sharma, Ss21, software developer, software engineer, cloud engineer, web developer, bangalore, Embitel Technologies, maniapl university, MAHE, bangalore',
  siteUrl: 'https://Ss21.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-JBNHLZYHH7',
  googleVerification: 't5AYejyrzomyxjWzJqtOmR9oRafJQ3F4oBnLQLpNweI',
  name: 'Sushank Sharma',
  location: 'Bangalore, Bharat',
  email: 'sushanks07@gmail.com',
  github: 'https://github.com/SushankSharma',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/SushankSharma',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sushank-sharma-ss21/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
