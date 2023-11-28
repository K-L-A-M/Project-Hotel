import { createContext, useState } from "react";
import { IUserContext } from "../interfaces/IUserContext";
import { IProviderProps } from "../interfaces/IProviderProps";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IProviderProps) => {
  const [isOpenCapacity, setIsOpenCapacity] = useState<boolean>(false);
  const [adultCapacity, setAdultCapacity] = useState<number>(1);
  const [childCapacity, setChildCapacity] = useState<number>(0);
  const [numberOfRooms, setNumberOfRooms] = useState<number>(1);

  const incrementAdultCapacity = () => {
    if (adultCapacity < 10) {
      setAdultCapacity(adultCapacity + 1)
    }
  }

  const decreaseAdultCapacity = () => {
    if (adultCapacity > 1) {
      setAdultCapacity(adultCapacity - 1)
    }
  }

  const incrementChildCapacity = () => {
    if (childCapacity < 10) {
      setChildCapacity(childCapacity + 1)
    }
  }

  const decreaseChildCapacity = () => {
    if (childCapacity >= 1) {
      setChildCapacity(childCapacity - 1)
    }
  }

  const incrementNumberOfRooms = () => {
    if (numberOfRooms < 10) {
      setNumberOfRooms(numberOfRooms + 1)
    }
  }

  const decreaseNumberOfRooms = () => {
    if (numberOfRooms > 1) {
      setNumberOfRooms(numberOfRooms - 1)
    }
  }

  return (
    <UserContext.Provider
      value={{
        isOpenCapacity,
        setIsOpenCapacity,
        adultCapacity,
        setAdultCapacity,
        childCapacity,
        setChildCapacity,
        numberOfRooms,
        setNumberOfRooms,
        incrementAdultCapacity,
        decreaseAdultCapacity,
        incrementChildCapacity,
        decreaseChildCapacity,
        incrementNumberOfRooms,
        decreaseNumberOfRooms,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
