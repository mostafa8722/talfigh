import { Category } from "./category";

export type Menu = {
  id: number
  title: string
  type: number
  tab: number
  parentId: number
  left: number
  right: number
  children: Category[]
}
