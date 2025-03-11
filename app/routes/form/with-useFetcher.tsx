import { Form, useFetcher, useLoaderData } from 'react-router';
import { getCitiesByProvince, getProvinces } from './apis';

export async function loader() {
  const provinces = getProvinces();
  return { provinces };
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const intent = formData.get('intent');
  const province = formData.get('province') as string;
  const city = formData.get('city') as string | null;

  if (intent === 'fetchCities') {
    const cities = getCitiesByProvince(province).map(
      (city: { name: string; province: string }) => city.name
    );
    return { cities };
  }

  if (intent === 'submitForm') {
    console.log('submitted province:', province);
    console.log('submitted city:', city);
    return null;
  }

  return null;
}

export default function Home() {
  const { provinces } = useLoaderData<typeof loader>();
  const fetcher = useFetcher();
  const cities = (fetcher.data?.cities as string[]) || [];

  return (
    <Form method="post">
      <label htmlFor="province">Select your province:</label>
      <select
        id="province"
        name="province"
        onChange={(event) => {
          fetcher.submit(
            { intent: 'fetchCities', province: event.target.value },
            { method: 'post' }
          );
        }}
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

      <button type="submit" name="intent" value="submitForm">
        Submit
      </button>
    </Form>
  );
}
