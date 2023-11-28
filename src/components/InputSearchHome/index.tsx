import { useContext, useState } from "react";
import { StyledInputSearchHome } from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { StyledButton } from "../../styles/StyledButton";
import { RiUser3Line } from "react-icons/ri";
import { StyledTypography } from "../../styles/StyledTypography";
import { IoIosArrowDown } from "react-icons/io";
import { CapacityModal } from "../CapacityModal";
import { UserContext } from "../../providers/UserContext";

export const InputSearchHome = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const {
    isOpenCapacity,
    setIsOpenCapacity,
    adultCapacity,
    childCapacity,
    numberOfRooms,
  } = useContext(UserContext);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);

    // Garante que endDate seja pelo menos 1 dia à frente de startDate
    if (date) {
      const nextDay = new Date(date);
      nextDay.setDate(date.getDate() + 1);
      setEndDate(nextDay);
    }
  };

  return (
    <StyledInputSearchHome>
      <div>
        <StyledTypography type="destaque">
          Sempre com você para todos os momentos!
        </StyledTypography>
        <div>
          <div className="date_in">
            <StyledTypography weight={500}> Entrada </StyledTypography>
            <DatePicker
              selected={startDate}
              placeholderText="../../.."
              minDate={new Date()}
              onChange={handleStartDateChange}
              selectsStart
              endDate={endDate}
              openToDate={startDate || undefined} // Ajuste aqui para resolver o erro
              dateFormat="dd/MM/yy"
            />
          </div>
          <div className="half_divider"></div>
          <div className="date_out">
            <StyledTypography weight={500}> Saida </StyledTypography>
            <DatePicker
              selected={endDate}
              placeholderText="../../.."
              onChange={(date: Date | null) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              minDate={startDate}
              dateFormat="dd/MM/yy"
            />
          </div>
          <div className="divider"></div>
          <div className="capacity_container">
            <div
              className="capacity_display"
              onClick={() => setIsOpenCapacity(!isOpenCapacity)}
            >
              <RiUser3Line size={30} />
              <div>
                <StyledTypography weight={500}>
                  {adultCapacity}
                </StyledTypography>
                <StyledTypography weight={500}>
                  {adultCapacity > 1 ? "adultos" : "adulto"}
                </StyledTypography>
                <div className="ball_divider"></div>
                <StyledTypography weight={500}>
                  {childCapacity}
                </StyledTypography>
                <StyledTypography weight={500}>
                  {childCapacity > 1 ? "crianças" : "criança"}
                </StyledTypography>
                <div className="ball_divider"></div>
                <StyledTypography weight={500}>
                  {numberOfRooms}
                </StyledTypography>
                <StyledTypography weight={500}>
                  {numberOfRooms > 1 ? "quartos" : "quarto"}
                </StyledTypography>
              </div>
              <IoIosArrowDown size={20} />
            </div>
            {isOpenCapacity && <CapacityModal />}
          </div>
          <div className="divider"></div>
          <div>
            <StyledButton width={152} height={47.5} radius={10}>
              Pesquisar
            </StyledButton>
          </div>
        </div>
      </div>
    </StyledInputSearchHome>
  );
};
