import { Category } from '~/data/models/category'

export type Product = {
  title: string
  shortDescription: string
  description: string
  metaDescription: string
  scoreId: number
  workshopId: number
  categories: Category[]
  images: []
}
