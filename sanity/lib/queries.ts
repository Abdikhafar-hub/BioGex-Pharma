import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    title,
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`

export const partnersQuery = groq`
  *[_type == "partners"]{
    name,
    "logo": logo.asset->url
  }
`

export const who_we_areQuery = groq`
  *[_type == "who_we_are"][0]{
    mission,
    vision,
    short_about,
    full_about,
    core_values[]->{
      _type,
      name,
      description
    },
  }
`

export const core_valueQuery = groq`
  *[_type == "core_value"][0]{
    name,
    description
  }
`

export const teamQuery = groq`
  *[_type == "team"][0]{
    name,
    title,
    image
  }
`

export const servicesQuery = groq`
  *[_type == "services"][0]{
    service,
    short_description
  }
`

export const testimonialsQuery = groq`
  *[_type == "testimonials"][0]{
    testimonial,
    name,
    title,
    image
  }
`

export const contactsQuery = groq`
  *[_type == "contacts"][0]{
    location,
    email,
    phone,
    whatsapp
  }
`

export const social_media_linksQuery = groq`
  *[_type == "social_media_links"][0]{
    fb,
    x,
    insta,
    linkedin
  }
` 
