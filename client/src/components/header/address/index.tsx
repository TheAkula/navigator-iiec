import { StyledAddress } from "./styled";
import Marker from "../../../assets/images/map 1.svg";

const Address = () => {
  return (
    <StyledAddress>
      <img src={Marker} alt=" " />
      <p>
        ул. Ленина, 68, Ижевск,
        <br /> республика Удмуртия, 426004
      </p>
    </StyledAddress>
  );
};

export default Address;
