import { useMediaQuery } from "react-responsive";

const useScreenSize = () => {
    return useMediaQuery({ minWidth: 992});
};

export default useScreenSize;