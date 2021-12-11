export type Province = {
  id: number,
  country_id: number,
  name: string,
  name_en: string,
  latitude: string,
  longitude: string,
}

export type ProvinceWithCity = {
  id: number,
  country_id: number,
  name: string,
  name_en: string,
  latitude: string,
  longitude: string,
  city: []
}
