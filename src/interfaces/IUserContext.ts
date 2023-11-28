export interface IUserContext {
    isOpenCapacity: boolean;
    setIsOpenCapacity: React.Dispatch<React.SetStateAction<boolean>>;
    adultCapacity: number;
    setAdultCapacity: React.Dispatch<React.SetStateAction<number>>;
    childCapacity: number;
    setChildCapacity: React.Dispatch<React.SetStateAction<number>>;
    numberOfRooms: number;
    setNumberOfRooms: React.Dispatch<React.SetStateAction<number>>;
    incrementAdultCapacity: () => void;
    decreaseAdultCapacity: () => void;
    incrementChildCapacity: () => void;
    decreaseChildCapacity: () => void;
    incrementNumberOfRooms: () => void;
    decreaseNumberOfRooms: () => void;
}