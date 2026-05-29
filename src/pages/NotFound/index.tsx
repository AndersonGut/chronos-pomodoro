import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Pagina não encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi at
          et perspiciatis dolor officiis laborum molestias, optio omnis.
          Explicabo optio est maiores dolorem aperiam rerum quis sit hic
          perferendis molestias?
        </p>
      </Container>
    </MainTemplate>
  );
}
