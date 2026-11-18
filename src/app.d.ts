// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
		__VD?: Record<string, string>;
		__hmReset?: () => void;
		__hmReveal?: () => void;
		__hmFolder?: () => boolean;
		__hmOn?: () => boolean;
		__hmOff?: () => void;
	}
}

export {};
