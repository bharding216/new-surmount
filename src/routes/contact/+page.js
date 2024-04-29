import { PUBLIC_recaptcha_site_key } from '$env/static/public'

export function load() {
    return {
        recaptcha_site_key: PUBLIC_recaptcha_site_key
    }
}