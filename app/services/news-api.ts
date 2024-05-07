type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type NewsDataPayload = {
  status: string;
  totalResults: number;
  articles: Article[];
};

// const NEWS_API_BASE_URL = "https://newsapi.org/v2";

const AWS_NEWS_API_BASE_URL =
  "https://hw2pv1rs50.execute-api.ap-south-1.amazonaws.com";

// https://hw2pv1rs50.execute-api.ap-south-1.amazonaws.com/headlines?country=us

export async function fetchTopHeadlinesFromNewsApi({
  country = "us",
}: {
  country?: string;
}) {
  const url = new URL(`${AWS_NEWS_API_BASE_URL}/headlines`);

  url.search = new URLSearchParams({
    country,
  }).toString();

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer 3955f425a7aa4c979551f811a349b10e`,
    },
  });

  const json = await response.json();

  return json as NewsDataPayload;
}
