import { forwardRef } from "react";
import { ISelect } from "../../interfaces/ISelect";
import { StyledSelect } from "./styles";
import { StyledTypography } from "../../styles/StyledTypography";

export const Select = forwardRef<HTMLSelectElement, ISelect>(
  ({ helper, label, selectId, items, placeholder, ...rest }, ref) => {
    return (
      <StyledSelect>
        {label ? <label htmlFor={selectId}>{label}</label> : null}
        <select id={selectId} ref={ref} {...rest}>
          {placeholder && (
            <option key={placeholder} value="">
              {placeholder}
            </option>
          )}
          {items?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {helper && (
          <StyledTypography type="detail" color="red">
            {helper}
          </StyledTypography>
        )}
      </StyledSelect>
    );
  }
);
