import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  docs: {
    type: 'page',
    title: 'Documentation',
    items: {
      'get-started-section': {
        type: 'separator',
        title: 'Get Started'
      },
      'get-started': 'Get Started',
      'new-team-member': 'New Team Member',
      'contributing-maintaining': 'Contributing & Maintaining',
      _: {
        type: 'separator',
        title: 'Engineering'
      },
      'deployment': {
        title: 'Deployment',
        items: {
          'openshift-deployment': {
            title: 'OpenShift Deployment',
            items: {
              'overview': 'Overview',
              'pre-installation-planning': 'Pre-Installation Planning',
              'prerequisites-preparation': 'Prerequisites and Preparation',
              'installation-methods': 'Installation Methods',
              'cluster-configuration': 'Cluster Configuration',
              'post-installation-validation': 'Post-Installation Validation',
              'documentation-handover': 'Documentation and Handover',
              'references-templates': 'References and Templates'
            }
          },
          'deployment-checklist': {
            title: 'Deployment Checklist',
            items: {
              'vmware': 'VMware Deployment',
              'baremetal': 'Bare Metal Deployment',
              'hyperscaler': 'Hyperscaler Deployment'
            }
          }
        }
      },
      'operations': { 
        title: 'Operations',
        items: {
          'day-2-operations': 'Day-2 Operations',
          'backup-disaster-recovery': 'Backup and Disaster Recovery',
          'security-compliance': 'Security and Compliance'
        }
      },
      'observability': {
        title: 'Observability',
        items: {
          'checklists': 'Observability Checklists'
        }
      },
      'resources': {
        title: 'Resources',
        items: {
          'tools': 'Tools & Utilities',
          'documentation': 'Documentation',
          'training': 'Training & Certification'
        }
      },
      _sales: {
        type: 'separator',
        title: 'Sales'
      },
      'sales-get-started': {
        title: 'Get Started',
        items: {
          'company-overview': 'Company Overview',
          'client-engagement': 'Client Engagement',
          'onboarding-guide': 'Onboarding Guide'
        }
      },
      'sales-playbooks': {
        title: 'Sales Playbooks',
        items: {
          'messaging-frameworks': 'Messaging Frameworks',
          'pitch-decks': 'Pitch Decks & Client Presentations',
          'case-studies': 'Case Studies & References',
          'objection-handling': 'Objection Handling Guides'
        }
      },
      'pricing-offerings': {
        title: 'Pricing & Offerings',
        items: {
          'service-catalog': 'Service Catalog',
          'pricing-models': 'Pricing Models & Discounts',
          'custom-proposals': 'Custom Proposals'
        }
      },
      'client-management': {
        title: 'Client Management',
        items: {
          'crm-processes': 'CRM Processes',
          'lead-tracking': 'Lead Tracking & Reporting',
          'post-sales-support': 'Post-Sales Support Workflow'
        }
      },
      'sales-resources': {
        title: 'Sales Resources',
        items: {
          'templates': 'Templates for Proposals & Contracts',
          'training-materials': 'Internal Training Materials',
          'reference-guides': 'Reference Guides for Technical Discussions'
        }
      },
      __: {
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
