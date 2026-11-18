import { json, type RequestHandler, type RequestEvent } from '@sveltejs/kit';
import { RESEND_API_KEY, RESEND_TO } from '$app/env/private';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
	let body: Record<string, unknown> = {};
	try {
		body = (await request.json()) as Record<string, unknown>;
	} catch {
		return json({ error: 'Format data tidak valid.' }, { status: 400 });
	}

	const nama = String(body.nama ?? '').trim();
	const email = String(body.email ?? '').trim();
	const pesan = String(body.pesan ?? '').trim();

	if (!nama || !email || !pesan) {
		return json({ error: 'Semua kolom harus diisi.' }, { status: 400 });
	}

	if (!email.includes('@')) {
		return json({ error: 'Format email belum benar.' }, { status: 400 });
	}

	const kunci = RESEND_API_KEY;
	const tujuan = RESEND_TO || 'owekmessi@gmail.com';

	if (!kunci || !tujuan) {
		return json({ error: 'Kunci Resend belum dipasang di .env.' }, { status: 500 });
	}

	try {
		const balasan = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${kunci}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				from: 'Portofolio <onboarding@resend.dev>',
				to: [tujuan],
				reply_to: email,
				subject: `Pesan dari ${nama}`,
				text: `${pesan}\n\n— ${nama} <${email}>`
			})
		});

		if (!balasan.ok) {
			const detail = await balasan.text();
			return json({ error: 'Gagal mengirim email via Resend.', detail }, { status: 502 });
		}

		return json({ ok: true, message: 'Pesan terkirim. Terima kasih!' });
	} catch (err) {
		return json(
			{ error: err instanceof Error ? err.message : 'Gagal mengirim pesan.' },
			{ status: 500 }
		);
	}
};
