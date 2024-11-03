export const getMessage = async (user_id: string) => {
    const response = await fetch('/api', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id })
    });

    return await response.json() as Promise<string>;
}