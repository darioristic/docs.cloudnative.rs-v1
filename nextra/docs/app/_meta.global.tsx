import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  docs: {
    type: 'menu',
    title: 'Documentation',
    items: {
      'get-started-section': {
        type: 'separator',
        title: 'Get Started'
      },
      'get-started': 'Get Started',
      'new-team-member': 'New Team Member',
      'contributing-maintaining': 'Contributing & Maintaining',
      _engineering: {
        type: 'separator',
        title: 'Engineering'
      },
      'deployment': 'Deployment',
      'operations': 'Operations',
      'observability': 'Observability',
      'resources': 'Resources',
      _sales_separator: {
        type: 'separator',
        title: 'Sales'
      },
      'sales-get-started': 'Sales Get Started',
      'sales-playbooks': 'Sales Playbooks',
      'pricing-offerings': 'Pricing & Offerings',
      'client-management': 'Client Management',
      'sales-resources': 'Sales Resources',
      _external: {
        type: 'separator',
        title: 'External'
      },
      'about-link': {
        title: 'About Nextra',
        href: '/about'
      },
      'next.js-link': {
        title: 'Next.js Docs',
        href: 'https://nextjs.org?utm_source=nextra.site&utm_medium=referral&utm_campaign=sidebar'
      },
      'migration-from-v3': {
        title: 'Migration from Nextra v3',
        href: 'https://the-guild.dev/blog/nextra-4?utm_source=nextra.site&utm_campaign=sidebar&utm_content=sidebar_link#nextra-theme-docs-changes'
      }
    }
  },
  versions: {
    type: 'menu',
    title: 'Versions',
    items: {
      _3: {
        title: 'Nextra v3 Docs',
        href: 'https://nextra-v2-7hslbun8z-shud.vercel.app'
      },
      _2: {
        title: 'Nextra v2 Docs',
        href: 'https://nextra-v2-oe0zrpzjp-shud.vercel.app'
      }
    }
  },
  blog: {
    type: 'page',
    theme: {
      typesetting: 'article',
      toc: false
    }
  },
  about: {
    type: 'page',
    theme: {
      typesetting: 'article'
    }
  },
  showcase: {
    type: 'page',
    theme: {
      typesetting: 'article',
      layout: 'full',
      timestamp: false,
      toc: false
    }
  },
  sponsors: {
    type: 'page',
    theme: {
      typesetting: 'article',
      layout: 'full',
      timestamp: false,
      toc: false
    }
  }
}

export default meta
