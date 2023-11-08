export const services = {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      
    ],
    preview: {
      select: {
        title: 'title',
        description: 'description',
      },
    },
  }
  