async function fetchMultipleURLs(urls) {
  try {
    const responses = await Promise.all(
      urls.map(url => fetch(url).then(res => res.text()))
    );
    return responses;
  } catch (error) {
    console.error('Error fetching URLs:', error);
    throw error;
  }
}
