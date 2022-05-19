export default function findImage(array, searchTerm) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].type === searchTerm) {
      return array[i].url
    }
  }
}
