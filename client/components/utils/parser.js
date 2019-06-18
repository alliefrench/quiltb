export default function parser(input) {
  return typeof input === 'string' ? JSON.parse(input) : input
}
