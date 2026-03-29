export const YOUTUBE_DOMAINS = ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtube.be'];

export const isAllowedHost = (host: string, allowedHosts: string[]) => {
  const h = host.toLowerCase().replace(/^www\./, '');
  return allowedHosts.some(d => h === d.toLowerCase().replace(/^www\./, ''));
};
