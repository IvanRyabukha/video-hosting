const videosData = new Set<string>();

export async function GET() {
  videosData.add('pJxeyK7it0o');
  videosData.add('YGAsG6_JgAI');
  videosData.add('G1hKzCkywM8');
  videosData.add('OWz7HiR6H-0');
  videosData.add('PTng8teLjsc');
  videosData.add('PtJ6yAGjsIs');
  videosData.add('0Nyg560YgYM');
  videosData.add('jfKfPfyJRdk');
  videosData.add('IZny2a_p6LY');
  videosData.add('VQRLujxTm3c');
  videosData.add('CEhLhiaygI0');
  videosData.add('Qs2-klYtq5Y');

  return Response.json(({ ok: 200, data: Array.from(videosData) }));
}

export async function POST(request: Request) {
  const data = await request.json();

  if (videosData.has(data.videoId)) {
    return Response.json(
      { ok: false, error: 'Video already exists' },
      { status: 400 },
    );
  }

  videosData.add(data.videoId);

  return Response.json(
    { ok: true },
    { status: 200 },
  );
}
