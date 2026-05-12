import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2={'string'}>
        Olá mundo 1
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
