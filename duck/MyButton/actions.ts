//Action型のエイリアス
export type CountStateAction = {
    type: "count/increment",
    payload: number
};

export const countIncrement = (value: number): CountStateAction => {
    return (
        {
            type: "count/increment",
            payload: value
        }
    );
}