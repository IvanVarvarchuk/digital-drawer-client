import { render } from '@testing-library/react';

import QueueList from './queue-list';
import { ConvertionContextProvider } from '../../pages/convert/state/use-convertion-state/use-convertion-state';

describe('QueueList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConvertionContextProvider>
      <QueueList handleOnSubmit={() => 1}/>
    </ConvertionContextProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
