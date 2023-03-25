import { Search } from '../Search';
import { Display } from '../Display';
import { Wrapper } from './index.style';

interface ILayout {}

export function Layout() {
  return (
    <Wrapper>
      <Search></Search>
      <Display></Display>
    </Wrapper>
  );
}
