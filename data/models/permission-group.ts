import {Permission} from "@/data/models/permission";

export type PermissionGroup = {
  id: number
  title: string
  permissions: Permission[]
  type: number
}
