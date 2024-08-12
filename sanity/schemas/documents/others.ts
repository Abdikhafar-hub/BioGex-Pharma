// partners logos (name and logo) 
// who we are( mission, vision, short_about, full_about, core values),
// team( image, name, title)
// services(service, short description),
// testimonials(testimonial, name, title)
// contacts( location, email, phone, WhatsApp)
// social media links( fb, x, insta, linkedin)

import { ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

// create schemas for the above listed  items

export const partners = defineType({
    name: 'partners',
    title: 'Partners',
    type: 'document',
    icon: ImageIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})

export const who_we_are = defineType({
    name: 'who_we_are',
    title: 'Who We Are',
    type: 'document',
    icon: ImageIcon,
    fields: [
        defineField({
            name: 'mission',
            title: 'Mission',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'vision',
            title: 'Vision',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'short_about',
            title: 'Short About',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'full_about',
            title: 'Full About',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'core_values',
            title: 'Core Values',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'core_value',
                }),
            ],
        }),
    ],
})

export const core_value = defineType({
    name: 'core_value',
    title: 'Core Value',
    type: 'document',
    icon: ImageIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ],
})

export const team = defineType({
    name: 'team',
    title: 'Team',
    type: 'document',
    icon: ImageIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})

export const services = defineType({
    name: 'services',
    title: 'Services',
    type: 'document',
    icon: ImageIcon,
    fields: [
        defineField({
            name: 'service',
            title: 'Service',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'short_description',
            title: 'Short Description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ],
})

export const testimonials = defineType({
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    icon: ImageIcon,
    fields: [
        defineField({
            name: 'testimonial',
            title: 'Testimonial',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),  
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})

export const contacts = defineType({
    name: 'contacts',
    title: 'Contacts',
    type: 'document',
    icon: ImageIcon,
    fields: [
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'whatsapp',
            title: 'WhatsApp',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ],
})

export const social_media_links = defineType({
    name: 'social_media_links',
    title: 'Social Media Links',
    type: 'document',
    icon: ImageIcon,
    fields: [
        defineField({
            name: 'fb',
            title: 'Facebook',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'x',
            title: 'X',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'insta',
            title: 'Instagram',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ],
})



