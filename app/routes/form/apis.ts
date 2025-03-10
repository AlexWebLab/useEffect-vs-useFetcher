export function getProvinces() {
  return [
    { name: 'British Columbia', code: 'BC' },
    { name: 'Ontario', code: 'ON' },
    { name: 'Quebec', code: 'QC' },
  ];
}

export function getCitiesByProvince(province: string) {
  const cities = [
    { name: 'Abbotsford', province: 'BC' },
    { name: 'Brampton', province: 'ON' },
    { name: 'Burnaby', province: 'BC' },
    { name: 'Gatineau', province: 'QC' },
    { name: 'Hamilton', province: 'ON' },
    { name: 'Laval', province: 'QC' },
    { name: 'Markham', province: 'ON' },
    { name: 'Mississauga', province: 'ON' },
    { name: 'Montreal', province: 'QC' },
    { name: 'Ottawa', province: 'ON' },
    { name: 'Quebec City', province: 'QC' },
    { name: 'Richmond', province: 'BC' },
    { name: 'Saguenay', province: 'QC' },
    { name: 'Sherbrooke', province: 'QC' },
    { name: 'Surrey', province: 'BC' },
    { name: 'Toronto', province: 'ON' },
    { name: 'Vancouver', province: 'BC' },
    { name: 'Victoria', province: 'BC' },
  ];
  return cities.filter((city) => city.province === province);
}
