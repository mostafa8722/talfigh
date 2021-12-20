import {PermissionGroup} from "@/data/models/permission-group";

export type Role = {
  id: number
  title: string
  name: string
    accessGroups: PermissionGroup[]

}
