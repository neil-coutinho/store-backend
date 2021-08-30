import { integer, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({
      options: [
        {
          label: 'Draft',
          value: 'DRAFT',
        },
        { label: 'Available', value: 'AVAILABLE' },
        {
          label: 'Unavailable',
          value: 'UNAVAILABLE',
        },
      ],
      ui: {
        displayMode: 'segmented-control',
      },
      defaultValue: 'DRAFT',
    }),
    price: integer(),
  },
});
