// Generate Todo Ids
export const idGenerator = () => {
  let id = '', random, i;
  for (i = 0; i < 8; i++) {
    random = Math.random() * 16 | 0;
    id += random.toString(16);
  }
  return id;
}
