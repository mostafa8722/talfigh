export default function ({ redirect, route }) {
  const isMaintenance = false
  if (isMaintenance) {
    return redirect('/maintenance-page')
  }
  if (isMaintenance === false && route.path === '/maintenance-page') {
    return redirect('/')
  }
}
