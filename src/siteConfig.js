const siteConfig = {
  artistName: 'Avery Skye',
  role: 'Singer-Songwriter',
  pages: {
    home: {
      slug: '',
      label: 'Home',
      hero: {
        eyebrow: 'New single out now',
        title: 'Stories from the road, sung with soul and a six-string.',
        description:
          'Avery Skye blends folk storytelling with modern indie textures. Each page on this starter site now has its own config block, so you can grow the site without hardcoding copy into the app.',
      },
      welcome: {
        title: 'What fans usually look for first',
        description:
          'Use these cards for quick context, current priorities, or the highlights you want visitors to see right away.',
        highlights: [
          {
            title: 'Latest Release',
            description:
              'Point listeners to a new single, EP, or album and swap in fresh copy whenever something new drops.',
          },
          {
            title: 'Tour Updates',
            description:
              'Keep upcoming dates front and center so fans know where to catch the next show.',
          },
          {
            title: 'Artist Story',
            description:
              'Give new visitors a clear sense of your sound, influences, and what makes the project distinct.',
          },
        ],
      },
      featuredLinks: {
        title: 'Featured links',
        description:
          'These are the high-traffic destinations that usually belong on the homepage for a music site.',
        items: [
          {
            label: 'Spotify',
            description: 'Stream the catalog and highlight editorial playlists or the latest release.',
            url: 'https://open.spotify.com/',
          },
          {
            label: 'YouTube',
            description: 'Link to live sessions, official videos, or acoustic takes.',
            url: 'https://www.youtube.com/',
          },
          {
            label: 'Instagram',
            description: 'Send visitors to short updates, behind-the-scenes posts, and reels.',
            url: 'https://www.instagram.com/',
          },
        ],
      },
    },
    about: {
      slug: 'about',
      label: 'About',
      title: 'About',
      intro: 'A dedicated bio page is one of the most common asks for artist websites.',
      paragraphs: [
        'Avery Skye writes songs that feel lived-in: small-town details, long highways, and moments that land with quiet force.',
        'This page is set up for a fuller bio than the homepage, making it useful for fans, venues, and press who want more background.',
      ],
      factsTitle: 'Quick facts',
      facts: [
        { label: 'Based in', value: 'Nashville, Tennessee' },
        { label: 'Sounds like', value: 'Indie folk with Americana warmth' },
        { label: 'For fans of', value: 'Brandi Carlile, The Lumineers, Hozier' },
      ],
    },
    music: {
      slug: 'music',
      label: 'Music',
      title: 'Music',
      intro: 'Use this page for releases, playlists, listening links, and liner-note style descriptions.',
      releases: [
        {
          title: 'Miles Between Us',
          year: '2026',
          format: 'Single',
          description: 'A reflective road-song about distance, memory, and the pull of home.',
          linkLabel: 'Listen now',
          url: 'https://open.spotify.com/',
        },
        {
          title: 'Night Drive Demos',
          year: '2025',
          format: 'EP',
          description: 'Stripped-back recordings that lean into voice, guitar, and late-night atmosphere.',
          linkLabel: 'Stream the EP',
          url: 'https://bandcamp.com/',
        },
      ],
    },
    shows: {
      slug: 'shows',
      label: 'Shows',
      title: 'Shows',
      intro: 'Tour and event pages are another standard expectation for artist websites.',
      upcoming: [
        {
          date: 'Jun 14, 2026',
          venue: 'The Bluebird Room',
          location: 'Nashville, TN',
          note: 'Full-band set with local support. Doors at 7 PM.',
          linkLabel: 'Tickets',
          url: 'https://www.songkick.com/',
        },
        {
          date: 'Jul 03, 2026',
          venue: 'Summer Fields Festival',
          location: 'Asheville, NC',
          note: 'Festival afternoon slot with signing after the set.',
          linkLabel: 'Festival info',
          url: 'https://www.songkick.com/',
        },
      ],
    },
    press: {
      slug: 'press',
      label: 'Press',
      title: 'Press',
      intro: 'Press or EPK pages are common for booking, media outreach, and festival applications.',
      quotes: [
        {
          source: 'Northline Magazine',
          text: 'Avery Skye turns everyday scenes into songs that feel cinematic and close at the same time.',
        },
        {
          source: 'Late Night Folk Hour',
          text: 'There is an ease to the writing, but the hooks linger long after the set ends.',
        },
      ],
      assetsTitle: 'Typical press-page content',
      assets: [
        'Short bio and full bio versions',
        'Approved press photos',
        'Recent release highlights',
        'Booking, management, and press contacts',
      ],
    },
    contact: {
      slug: 'contact',
      label: 'Contact',
      title: 'Contact',
      intro: 'Keep the important contact paths in one place for booking, press, and collaborations.',
      methodsTitle: 'Direct contact',
      methods: [
        {
          label: 'Booking',
          value: 'booking@averyskye.com',
          href: 'mailto:booking@averyskye.com',
        },
        {
          label: 'Press',
          value: 'press@averyskye.com',
          href: 'mailto:press@averyskye.com',
        },
        {
          label: 'Phone',
          value: '+1-555-0100',
          href: 'tel:+1-555-0100',
        },
      ],
      socialsTitle: 'Socials',
      socials: [
        {
          label: 'Instagram',
          value: '@averyskye',
          url: 'https://www.instagram.com/',
        },
        {
          label: 'YouTube',
          value: 'Avery Skye',
          url: 'https://www.youtube.com/',
        },
        {
          label: 'Bandcamp',
          value: 'averyskye.bandcamp.com',
          url: 'https://bandcamp.com/',
        },
      ],
    },
  },
}

export default siteConfig
