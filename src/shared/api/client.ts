
export async function ApiFetch<T>(
    method?: string,
    endpoint?: string,
    titulo?: string,
    mensaje?: string,
): Promise<T>{

    const url: string = process.env.NEXT_PUBLIC_BACKEND_URL ?? '';

    const res = await fetch(`${url}/${endpoint}`, {
        method: method ?? 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_INTERNAL_API_TOKEN!, 
        },
        body: JSON.stringify({
          subject: titulo,
          html: `<p>${mensaje}</p>`,
        }),
      });

      if(!res.ok){
        throw new Error('error')
      }

      return res.json() as Promise<T>
     
}