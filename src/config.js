module.exports = {
  siteTitle: 'Sushank Sharma | Technical Business Analyst • Aviation Operations • ITSM & Release Governance',
  siteDescription:
    'Sushank Sharma is an Operations-focused Technical Business Analyst specializing in aviation workflows, regulatory compliance (DGCA), and enterprise IT Service Management (ITSM).',
  siteKeywords:
    'Sushank Sharma, Technical Business Analyst, Aviation Operations, ITSM, Release Governance, DGCA Compliance, Root Cause Analysis, UAT, SQL, Power BI, Python, Gurugram, InterGlobe Aviation, IndiGo',
  siteUrl: 'https://ss21portfolio.netlify.app/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-JBNHLZYHH7',
  googleVerification: 't5AYejyrzomyxjWzJqtOmR9oRafJQ3F4oBnLQLpNweI',
  name: 'Sushank Sharma',
  location: 'Gurugram, India',
  email: 'sushanks07@gmail.com',
  github: 'https://github.com/SushankSharma',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/SushankSharma',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sushank-sharma-itba',
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
    green: '#005EB8',
    navy: '#00205B',
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
