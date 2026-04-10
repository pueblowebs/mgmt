export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
  try {
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
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
  }
}

/**
 * Get all Blog Posts
 */
export async function getBlogPosts() {
  const data = await fetchAPI("blog-posts", {
    populate: "*", // Populates images and relations
    status: "published",
  });
  return data.data; // Strapi v5 returns data in { data: [...], meta: {...} }
}
