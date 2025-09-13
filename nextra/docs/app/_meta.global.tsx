import type { MetaRecord } from 'nextra'


const CLIENT_MANAGEMENT: MetaRecord = {
  'crm-processes': '',
  'lead-tracking': '',
  'post-sales-support': ''
}

const CONTRIBUTING_MAINTAINING: MetaRecord = {
  'customize-the-cascade-layers': '',
  latex: '',
  mermaid: '',
  npm2yarn: '',
  remote: '',
  table: '',
  'tailwind-css': '',
  twoslash: '',
  typescript: ''
}

const DEPLOYMENT: MetaRecord = {
  'deployment-checklist': {
    items: {
      baremetal: '',
      hyperscaler: '',
      vmware: ''
    }
  },
  'openshift-deployment': {
    items: {
      'cluster-configuration': '',
      'documentation-handover': '',
      'installation-methods': '',
      overview: '',
      'post-installation-validation': '',
      'pre-installation-planning': '',
      'prerequisites-preparation': '',
      'references-templates': ''
    }
  }
}

const GET_STARTED: MetaRecord = {
  'ansible-file': '',
  'company-policies-file': '',
  'data-foundation-file': '',
  'ibm-fusion-file': '',
  'internal-tools-file': '',
  'meta-file': '',
  'methodology-file': '',
  'openshift-file': '',
  'openstack-file': '',
  'page-file': '',
  'project-file': '',
  'templates-checklists-file': ''
}

const NEW_TEAM_MEMBER: MetaRecord = {
  'custom-css': '',
  'github-alert-syntax': '',
  i18n: '',
  image: '',
  link: '',
  markdown: {
    items: {
      _counter: ''
    }
  },
  search: '',
  ssg: '',
  'static-exports': '',
  'syntax-highlighting': {
    items: {
      '_dynamic-code': ''
    }
  },
  turbopack: ''
}

const OBSERVABILITY: MetaRecord = {
  checklists: ''
}

const OPERATIONS: MetaRecord = {
  'backup-disaster-recovery': '',
  'day-2-operations': '',
  'security-compliance': ''
}

const PRICING_OFFERINGS: MetaRecord = {
  'custom-proposals': '',
  'pricing-models': '',
  'service-catalog': ''
}

const RESOURCES: MetaRecord = {
  documentation: '',
  tools: '',
  training: ''
}

const SALES_GET_STARTED: MetaRecord = {
  'client-engagement': '',
  'company-overview': '',
  'onboarding-guide': ''
}

const SALES_PLAYBOOKS: MetaRecord = {
  'case-studies': '',
  'messaging-frameworks': '',
  'objection-handling': '',
  'pitch-decks': ''
}

const SALES_RESOURCES: MetaRecord = {
  'reference-guides': '',
  templates: '',
  'training-materials': ''
}

export default {
  index: {
    type: 'page',
    display: 'hidden'
  },
  docs: {
    type: 'page',
    title: 'Documentation',
    items: {
      index: '',
      'client-management': { items: CLIENT_MANAGEMENT },
      'contributing-maintaining': { items: CONTRIBUTING_MAINTAINING },
      deployment: { items: DEPLOYMENT },
      'get-started': { items: GET_STARTED },
      'new-team-member': { items: NEW_TEAM_MEMBER },
      observability: { items: OBSERVABILITY },
      operations: { items: OPERATIONS },
      'pricing-offerings': { items: PRICING_OFFERINGS },
      resources: { items: RESOURCES },
      'sales-get-started': { items: SALES_GET_STARTED },
      'sales-playbooks': { items: SALES_PLAYBOOKS },
      'sales-resources': { items: SALES_RESOURCES },
      __: {
        type: 'separator',
        title: 'More'
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
  api: {
    type: 'page',
    title: <span className="badge-new">API</span>
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
