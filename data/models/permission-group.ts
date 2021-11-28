import Permission from "@/data/models/permission";

type PermissionGroup = {
  id: number
  title: string
  permissions: Permission[]
  type: number
}
 export default PermissionGroup