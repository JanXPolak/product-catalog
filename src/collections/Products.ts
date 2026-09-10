import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'name',
        type: 'text',
        required: true
    },
    {
        name: 'slug',
        type: 'text',
        required: true,
        unique: true,
        index: true,
    },
    {
        name: 'description',
        type: 'richText',
    },
    {
        name: 'price',
        type: 'number',
        required: true,
        min: 0,
    },
    {
        name: 'images',
        type: 'upload',
        relationTo: 'media',
        hasMany: true,
    },
    {
        name: 'category',
        type: 'relationship',
        relationTo: 'categories',
    },
    {
        name: 'stock',
        type: 'number',
        min: 0,
        defaultValue: 0,
    },
  ],
}