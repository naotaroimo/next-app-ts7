//Action型のエイリアス
export type Action = {
    type: "count/increment",
    payload: number
};

export const countIncrement = (value: number): Action => {
    return (
        {
            type: "count/increment",
            payload: value
        }
    );
}