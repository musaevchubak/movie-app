const useGeneres = (selectedGenres) => {
  if (selectedGenres.length < 1) return '';
  const GenreIds = selectedGenres.map((el) => el.id);
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
};

export default useGeneres;
