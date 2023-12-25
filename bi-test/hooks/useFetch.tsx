interface FetchConfig {
    url: string,
    revalidate: number
}

export async function useFetch(props: FetchConfig) {
    const response = await fetch(props.url, {mode: 'cors', next: { revalidate: props.revalidate}}).then((res) => {
      return res.json();
  })

  return response
}