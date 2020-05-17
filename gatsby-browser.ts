import 'minireset.css';
import { wrapRootElement as wrap } from './.gatsby/wrapRootElement';
import './src/styles/themes/dracula.css';

export const wrapRootElement = wrap;
export const onServiceWorkerUpdateReady = (): void => window.location.reload();
