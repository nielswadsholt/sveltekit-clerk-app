import { loadMessage } from './database';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const { user_id } = await request.json();
    const message = await loadMessage(user_id);

    return json(message);
}