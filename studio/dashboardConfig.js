export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f74b1d6e37cd50f28a6c009',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-meetup-studio',
                  apiId: '3be1016e-3464-4bef-b38c-f956ecdf3664'
                },
                {
                  buildHookId: '5f74b1d6f485ef0dba382a98',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-meetup',
                  apiId: '3f705eb0-e0d5-4aee-9275-c27528826296'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-kitchen-sink-meetup',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-meetup.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
