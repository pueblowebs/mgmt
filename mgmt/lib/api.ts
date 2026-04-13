const SHOULD_FETCH_STRAPI = false; // Desconectado temporalmente para evitar 503/timeouts

export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
  if (!SHOULD_FETCH_STRAPI) {
    return { data: [] }; // Retornar estructura vacía para disparar fallbacks locales
  }

  // Timeout generoso para soportar cold starts del free tier de Strapi Cloud (puede tardar ~45s)
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 45_000);

  try {
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      cache: "no-store" as RequestCache, // siempre dinámico — ISR falla en Vercel free (timeout < cold start de Strapi)
      signal: controller.signal,
      ...options,
    };

    const queryString = new URLSearchParams(urlParamsObject).toString();
    const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}${queryString ? `?${queryString}` : ""}`;

    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      console.error(response.statusText);
      throw new Error(`An error occurred please try again`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch API`);
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Get all Blog Posts
 */
export async function getBlogPosts() {
  const data = await fetchAPI("blog-posts", {
    populate: "*",
    status: "published",
  });
  return data.data; // Strapi v5
}

/**
 * Get a single Blog Post by Slug
 */
export async function getBlogPostBySlug(slug: string) {
  // Strapi nested queries don't work with URLSearchParams. Building it manually:
  const data = await fetchAPI(`blog-posts?filters[slug][$eq]=${slug}&populate=*&status=published`);
  
  return data.data?.[0] || null;
}

/**
 * Get all FAQs
 */
export async function getFAQs() {
  const data = await fetchAPI("faqs", {
    sort: "order:asc",
  });
  return data.data; // Strapi v5
}
