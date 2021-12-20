export type Category = {
  id: number
  title: string
  type: number
  tab: number
  parentId: number
  description: string
  children: Category[]
}
