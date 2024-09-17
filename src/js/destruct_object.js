export default function destructObject(obj) {
  const { special } = obj;
  const newArray = [];

  for (let i = 0; i < special.length; i += 1) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = special[i];
    newArray.push({
      id, name, icon, description,
    });
  }

  return newArray;
}
