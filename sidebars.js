module.exports = {
  // do not auto-generate a sidebar from the docs folder structure
  //sidebar: [{type: 'autogenerated', dirName: '.'}],

  // create a sidebar manually
  sidebar: [
    'index',
    'api-reference',
    {
      Overview: [
        'overview/introduction',
        'overview/authorizer',
        'overview/policy',
        'overview/control-plane',
        'overview/tenant',
        'overview/connections',
        'overview/policy-lifecycle',
        'overview/directory',
        'overview/decision-logs',
      ],
    },
    {
      'Getting Started': [
        {
          type: 'category',
          label: 'PeopleFinder Quickstart',
          collapsed: false,
          items: [
            'getting-started-acmecorp/quickstart',
            'getting-started-acmecorp/create-account',
            'getting-started-acmecorp/create-policy',
            'getting-started-acmecorp/set-up-users',
            'getting-started-acmecorp/deploy-peoplefinder',
            'getting-started-acmecorp/explore-peoplefinder',
            'getting-started-acmecorp/understanding-policies',
            'getting-started-acmecorp/modify-the-policy',
          ],
        },
        {
          type: 'category',
          label: 'Bring Your Own IDP (Auth0)',
          collapsed: true,
          items: [
            'getting-started-acmecorp/bring-your-own-idp/bring-your-own-idp',
            'getting-started-acmecorp/bring-your-own-idp/set-up-auth0',
            'getting-started-acmecorp/bring-your-own-idp/extend-user-attributes',
            'getting-started-acmecorp/bring-your-own-idp/deploy-peoplefinder-auth0',
          ],
        },
        'getting-started-acmecorp/install-onebox'
      ]
    },
    {
      Console: [
        'aserto-console/introduction',
        'aserto-console/connections',
        'aserto-console/directory',
        'aserto-console/policies',
        'aserto-console/view-policies',
        'aserto-console/manage-tenant',
      ],
    },
    {
      'Authorizer Guide': [
        'authorizer-guide/overview',
        'authorizer-guide/authz',
        'authorizer-guide/is',
        'authorizer-guide/identity-context',
        'authorizer-guide/policy-context',
        'authorizer-guide/resource-context',
        'authorizer-guide/query',
        'authorizer-guide/display-state-map',
        'authorizer-guide/decisiontree',
        'authorizer-guide/dir',
        'authorizer-guide/policy',
        'authorizer-guide/built-ins',
      ],
    },
    {
      SDKs: [
        'software-development-kits/overview',
        {
          type: 'category',
          label: 'JavaScript',
          collapsed: false,
          items: [
            'software-development-kits/javascript/react',
            'software-development-kits/javascript/spa',
            'software-development-kits/javascript/express',
          ],
        },
        {
          type: 'category',
          label: 'Python',
          collapsed: false,
          items: [
            'software-development-kits/python/api-client',
            'software-development-kits/python/flask',
            {
              type: 'category',
              label: 'Reference',
              collapsed: false,
              items: [
                'software-development-kits/python/identity-providers',
                'software-development-kits/python/authorizers',
              ]
            }
          ],
        },
        'software-development-kits/dotnetcore',
      ],
    },
    {
      CLI: [
        'command-line-interface/introduction',
        'command-line-interface/installation',
        'command-line-interface/login',
        'command-line-interface/policies',
        'command-line-interface/connections',
        'command-line-interface/directory',
        'command-line-interface/onebox',
      ],
    },
    {
      Troubleshooting: [
        'troubleshooting/toc',
        'troubleshooting/existing-policy-cannot-be-added',
        'troubleshooting/leaked-secret-keys',
        'troubleshooting/github-connection-cannot-be-removed',
        'troubleshooting/policy-added-but-shows-error',
        'troubleshooting/errors-reference',
      ]
    }
  ],
}