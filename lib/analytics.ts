export type AnalyticsEvent =
  | 'view_home'
  | 'click_drop'
  | 'subscribe_alert'
  | 'redeem_reward'
  | 'show_qr'
  | 'referral_share';

export function trackEvent(event: AnalyticsEvent, payload?: Record<string, unknown>) {
  console.info('[analytics]', { event, payload, timestamp: new Date().toISOString() });
}
