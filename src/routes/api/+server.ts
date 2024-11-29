import { loadMessage } from './database';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
    const user_id: string = await request.json();
    const message = await loadMessage(user_id);

    return json(message);
}