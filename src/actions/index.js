export const inNumber = (num) => {
    return (
        { type: "INCREMENT", payload: num }
    );
};

export const decNumber = () => ({ type: "DECREMENT" });