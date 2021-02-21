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
                  buildHookId: '6031ac759509f9a9d4ebfd0c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wc2mz5uz',
                  apiId: 'aed44dd4-3dd5-48a9-a86c-c8734f0b9dd5'
                },
                {
                  buildHookId: '6031ac75b2938b5090847536',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k3eoa1ro',
                  apiId: 'af06e48a-274e-4a74-ad67-3d142241d893'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Qurus/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k3eoa1ro.netlify.app', category: 'apps'}
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
