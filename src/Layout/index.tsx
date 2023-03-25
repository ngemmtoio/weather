import { Search } from '../Search';
import { Wrapper } from './index.style';

interface ILayout {}

export function Layout() {
  return (
    <Wrapper>
      <Search></Search>
    </Wrapper>
  );
}
