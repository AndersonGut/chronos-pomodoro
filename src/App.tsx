import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt
        iusto sit similique laborum quod debitis reiciendis necessitatibus,
        omnis ex? Deleniti error, molestiae nostrum esse eius totam debitis
        molestias sed?
      </p>
    </>
  );
}
