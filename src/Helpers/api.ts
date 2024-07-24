import {CausesType} from "./consts";

const apiUrl = 'https://api.bono.so/v1'

export const getCauses = async (): Promise<CausesType[] | undefined> => {
    try {
        const res = await fetch(apiUrl + '/charity/causes')
        const json = await res.json();
        return json?.data

    } catch (e) {
        console.log('error getting birds')
    }

}
export const signUp = async (email: string, firstName: string, causes: number[]): Promise<unknown> => {
    try {
        const response = await fetch(apiUrl + '/auth/register/anonymous', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                firstName: firstName,
                causes
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        return json?.message;

    } catch (error) {
        console.error('Error during sign-up:', error);
        throw error;
    }
};