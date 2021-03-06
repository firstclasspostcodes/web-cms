export default {
  fieldsets: [
    {
      title: 'Presentation',
      name: 'presentation',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],

  fields: [
    {
      title: 'Spacing',
      fieldset: 'presentation',
      description: 'Configure the spacing for the content pane',
      name: 'spacing',
      type: 'json',
    },
    {
      title: 'Visible from',
      fieldset: 'presentation',
      description:
        'Configure which breakpoint this content is visible from, leave blank if it should always be visible',
      name: 'visibility',
      type: 'string',
    },
    {
      title: 'Background',
      name: 'background',
      type: 'color',
      fieldset: 'presentation',
    },
    {
      title: 'Border',
      name: 'border',
      type: 'color',
      fieldset: 'presentation',
    },
    {
      title: 'Text Color',
      name: 'color',
      type: 'color',
      fieldset: 'presentation',
    },
  ],
};
