import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}

export interface PartnerPayload {
  name: string
  logo: Image
}

export interface WhoWeArePayload {
  mission: string
  vision: string
  short_about: string
  full_about: string
  core_values: CoreValuePayload[]
}

export interface CoreValuePayload {
  name: string
  description: string
}

export interface TeamPayload {
  name: string
  title: string
  image: Image
}

export interface ServicesPayload {
  service: string
  short_description: string
}

export interface TestimonialsPayload {
  testimonial: string
  name: string
  title: string
  image: Image
}

export interface ContactsPayload {
  location: string
  email: string
  phone: string
  whatsapp: string
}

export interface SocialMediaLinksPayload {
  fb: string
  x: string
  insta: string
  linkedin: string
}