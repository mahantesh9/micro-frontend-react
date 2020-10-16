import { registerApplication, start } from 'single-spa'

registerApplication(
  'react1', 
  () => import('./src/react1/main.app'),
  () => location.pathname === "/react" ? false : true
);

registerApplication(
  'react',
  () => import('./src/react/main.app'),
  () => location.pathname === "/react1"  ? false : true
);
start();