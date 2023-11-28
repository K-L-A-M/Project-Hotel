import { ForwardedRef, forwardRef, useState } from "react";
import { Iinput } from "../../interfaces/Iinput";
import { StyledInput } from "./styles";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { StyledTypography } from "../../styles/StyledTypography";

export const Input = forwardRef(
  (
    { helper, password, label, inputId, ...rest }: Iinput,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isHidden, setIsHidden] = useState(true);
    return (
      <StyledInput>
        {label ? <label htmlFor={inputId}>{label}</label> : null}
        <div>
          <input
            id = {inputId}
            type={password ? (isHidden ? "password" : "text") : rest.type}
            ref={ref}
            {...rest}
          />
          {password ? (
            isHidden ? (
              <FaRegEyeSlash size={19} color={'var(--color-dark-gray)'} onClick={() => setIsHidden(false)} />
            ) : (
              <FaRegEye size={19} color={'var(--color-dark-gray)'} onClick={() => setIsHidden(true)} />
            )
          ) : null}
        </div>
        <StyledTypography type="detail" color="red">{helper}</StyledTypography>
      </StyledInput>
    );
  }
);
