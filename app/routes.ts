import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/form/with-useEffect', 'routes/form/with-useEffect.tsx'),
  route('/form/with-useFetcher', 'routes/form/with-useFetcher.tsx'),
] satisfies RouteConfig;
