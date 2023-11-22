import { useState } from "react";
import { StyledInputSearchHome } from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { StyledButton } from "../../styles/StyledButton";

export const InputSearchHome = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

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
      <form action="">
        <div className="date_in">
          <p>entrada</p>
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
          <p>saida</p>
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
        <div>
          <div>
            <label htmlFor="">Adultos</label>
            <div>
              <button>-</button>
              <input type="number" />
              <button>+</button>
            </div>
          </div>
          <div>
            <label htmlFor="">Crianças</label>
            <div>
              <button>-</button>
              <input type="number" />
              <button>+</button>
            </div>
          </div>
        </div>
        <div>
          <StyledButton>Pesquisar</StyledButton>
        </div>
      </form>
    </StyledInputSearchHome>
  );
};
