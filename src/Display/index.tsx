import {
  Wrapper,
  Location,
  DateNow,
  TemperatureWrapper,
  TemperatureText,
  Weather,
} from '../Display/index.style';

interface IDisplay {}

export function Display() {
  return (
    <Wrapper>
      <Location>New York Sity, Us</Location>
      <DateNow>Friday, 25 april 2023</DateNow>
      <TemperatureWrapper>
        <TemperatureText>3 °C</TemperatureText>
      </TemperatureWrapper>
      <Weather>Cold</Weather>
    </Wrapper>
  );
}
