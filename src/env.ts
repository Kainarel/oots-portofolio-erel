import { defineEnvVars } from '@sveltejs/kit/env';

// SvelteKit 3 mengganti `$env/dynamic/private` dengan cara ini.
// Setiap variabel yang dipakai aplikasi didaftarkan di sini, sekali.
export const variables = defineEnvVars({
	RESEND_API_KEY: {
		description: 'Kunci API Resend. Rahasia, hanya untuk server.',
		schema: (value) => value ?? ''
	},
	RESEND_TO: {
		description: 'Email penerima pesan dari form kontak.',
		schema: (value) => value ?? ''
	}
});
