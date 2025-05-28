export async function POST(req) {
  const { language, code } = await req.json();

  if (!language || !code) {
    return new Response(JSON.stringify({ error: 'Missing language or code' }), {
      status: 400,
    });
  }

  try {
    const response = await fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language,
        source: code,
      }),
    });

    const data = await response.json();

    return new Response(JSON.stringify({ output: data.output }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Execution failed' }), {
      status: 500,
    });
  }
}
