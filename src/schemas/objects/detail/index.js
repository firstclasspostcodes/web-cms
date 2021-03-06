export default {
  title: 'Detail',

  name: 'detail',

  type: 'object',

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
      title: 'Summary',
      name: 'summary',
      type: 'portableText',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'portableText',
    },
    {
      title: 'Border',
      name: 'border',
      fieldset: 'presentation',
      type: 'color',
    },
  ],

  preview: {
    select: {
      summary: 'summary',
      content: 'content',
    },
    prepare({ summary, content }) {
      const textFromBlock = (blocks = []) => {
        let title = 'No content';
        const block = blocks.find(({ _type: type }) => type === 'block');
        if (block) {
          title = block.children
            .filter(({ _type: type }) => type === 'span')
            .map(span => span.text)
            .join('');
        }
        return title;
      };

      const title = textFromBlock(summary);
      const subtitle = textFromBlock(content);

      return {
        title,
        subtitle,
      };
    },
  },
};
