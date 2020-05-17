import 'minireset.css';
import { wrapRootElement as wrap } from './.gatsby/wrapRootElement';
import './src/styles/themes/dracula.css';

export const wrapRootElement = wrap;
export const onServiceWorkerUpdateReady = (): void => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`,
  );

  if (answer) {
    window.location.reload();
  }
};
