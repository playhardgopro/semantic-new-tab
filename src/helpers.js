
export default function getAll(type, array) {
  return array.filter((node) => (node.type === type));
}
