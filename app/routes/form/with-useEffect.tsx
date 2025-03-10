import { Form, useLoaderData } from 'react-router';
import { getCitiesByProvince, getProvinces } from './apis';
import { useState, useEffect } from 'react';

export async function loader() {
  const provinces = getProvinces();
  return { provinces };
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const province = formData.get('province');
  const city = formData.get('city');
  console.log('submitted province:', province);
  console.log('submitted city:', city);

  return null;
}

export default function Home() {
  const { provinces } = useLoaderData<typeof loader>();
  const [cities, setCities] = useState<string[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string>('');

  useEffect(() => {
    const citiesByProvince = getCitiesByProvince(selectedProvince);
    setCities(
      citiesByProvince.map(
        (city: { name: string; province: string }) => city.name
      )
    );
  }, [selectedProvince]);

  return (
    <Form method="post">
      <label htmlFor="province">Select your province:</label>
      <select
        id="province"
        name="province"
        onChange={(event) => setSelectedProvince(event.target.value)}
      >
        <option value="">--Please choose an option--</option>
        {provinces.map((province) => (
          <option key={province.code} value={province.code}>
            {province.name}
          </option>
        ))}
      </select>

      <label htmlFor="city">Select your city:</label>
      <select id="city" name="city">
        <option value="">--Please choose an option--</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>
    </Form>
  );
}
