// api/gemini.js
export const config = { runtime: "edge" };

export default async function handler(req) {
    if (req.method !== "POST") {
        return json({ error: "Método não permitido" }, 405);
    }

    try {
        const { prompt } = await req.json();
        if (!prompt || typeof prompt !== "string" || prompt.length < 5) {
            return json({ error: "Prompt inválido" }, 400);
        }

        const apiKey = process.env.GOOGLE_API_KEY;
        if (!apiKey) {
            return json({ error: "GOOGLE_API_KEY não configurada no Vercel" }, 500);
        }

        const model = "gemini-1.5-flash"; // troque para outro modelo se quiser
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        const payload = {
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig: {
                temperature: 0.3,
                topP: 0.95,
                maxOutputTokens: 1024
            }
        };

        const r = await fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!r.ok) {
            const details = await r.text();
            return json({ error: "Falha no serviço Gemini", details }, 502);
        }

        const data = await r.json();
        const text =
            data?.candidates?.[0]?.content?.parts
                ?.map((p) => p?.text || "")
                .join("") || "";

        return json({ output: text }, 200);
    } catch (e) {
        return json({ error: e?.message || "Erro interno" }, 500);
    }
}

function json(obj, status = 200) {
    return new Response(JSON.stringify(obj), {
        status,
        headers: { "content-type": "application/json" }
    });
}
