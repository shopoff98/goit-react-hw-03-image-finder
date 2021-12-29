const fetchApi = async (query, page) => {
  const response = await fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=24039882-fb287519b383d41b18511437f&image_type=photo&orientation=horizontal&per_page=12`,
  );
  const data = await response.json();
  return data;
};

export default fetchApi;
