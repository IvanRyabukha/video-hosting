const YT_ID = /^[A-Za-z0-9_-]{11}$/;

const RE_YT_SHORTS_PATH = /^\/shorts\/([A-Za-z0-9_-]{11})(?:[/?]|$)/;

const RE_YT_EMBED_PATH = /^\/embed\/([A-Za-z0-9_-]{11})(?:[/?]|$)/;

export const parseYoutubeUrl = (url: URL): string | null => {
  if (url.hostname.toLowerCase().replace(/^www\./, '') === 'youtube.be') {
    const id = url.pathname.slice(1).split('/')[0];
    return YT_ID.test(id) ? id : null;
  }

  if (url.pathname === '/watch') {
    const id = url.searchParams.get('v');
    return YT_ID.test(id || '') ? id : null;
  }

  const shorts = RE_YT_SHORTS_PATH.exec(url.pathname);
  if (shorts) return shorts[1];

  const embed = RE_YT_EMBED_PATH.exec(url.pathname);
  if (embed) return embed[1];

  return null;
};
