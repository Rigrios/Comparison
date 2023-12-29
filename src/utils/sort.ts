function sort(array: any, element: any) {
  return array.every((e: any, i: any, a: any) => e[element] === a[0][element]);
}

export default sort;
