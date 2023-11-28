import { useContext } from "react";
import { StyledTypography } from "../../styles/StyledTypography";
import { StyledCapacityModal } from "./styles";
import { UserContext } from "../../providers/UserContext";
import { StyledButton } from "../../styles/StyledButton";

export const CapacityModal = () => {
  const {
    adultCapacity,
    incrementAdultCapacity,
    decreaseAdultCapacity,
    childCapacity,
    incrementChildCapacity,
    decreaseChildCapacity,
    numberOfRooms,
    incrementNumberOfRooms,
    decreaseNumberOfRooms,
    setIsOpenCapacity
  } = useContext(UserContext);
  return (
    <StyledCapacityModal>
      <div>
        <StyledTypography weight={500}>Adultos :</StyledTypography>
        <div>
          <div>
            <StyledTypography onClick={() => decreaseAdultCapacity()}>
              -
            </StyledTypography>
          </div>
          <div>
            <StyledTypography weight={500}>{adultCapacity}</StyledTypography>
          </div>
          <div>
            <StyledTypography onClick={() => incrementAdultCapacity()}>
              +
            </StyledTypography>
          </div>
        </div>
      </div>
      <div>
        <StyledTypography weight={500}>Crianças :</StyledTypography>
        <div>
          <div>
            <StyledTypography onClick={() => decreaseChildCapacity()}>
              -
            </StyledTypography>
          </div>
          <div>
            <StyledTypography weight={500}>{childCapacity}</StyledTypography>
          </div>
          <div>
            <StyledTypography onClick={() => incrementChildCapacity()}>
              +
            </StyledTypography>
          </div>
        </div>
      </div>
      <div>
        <StyledTypography weight={500}>Quartos :</StyledTypography>
        <div>
          <div>
            <StyledTypography onClick={() => decreaseNumberOfRooms()}>
              -
            </StyledTypography>
          </div>
          <div>
            <StyledTypography weight={500}>{numberOfRooms}</StyledTypography>
          </div>
          <div>
            <StyledTypography onClick={() => incrementNumberOfRooms()}>
              +
            </StyledTypography>
          </div>
        </div>
      </div>
      <StyledButton width={160} height={40} radius={5} onClick={()=> setIsOpenCapacity(false)}> Confirmar </StyledButton>
    </StyledCapacityModal>
  );
};
