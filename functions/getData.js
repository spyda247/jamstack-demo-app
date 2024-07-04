export async function getData() {
  const progData = await fetch('../data.json');
  return progData;
}
