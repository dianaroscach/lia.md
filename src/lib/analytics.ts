export type AnalyticsEvent="discover_books"|"add_to_cart"|"request_consultation"|"form_submit"|"newsletter_signup"|"view_book"|"view_pattern";
export const trackEvent=(event:AnalyticsEvent,data?:Record<string,string|number>)=>{if(typeof window!=="undefined") window.dispatchEvent(new CustomEvent("ciocarlia:analytics",{detail:{event,data}}));};
