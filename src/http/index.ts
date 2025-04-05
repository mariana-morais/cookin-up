import type ICategory from "@/interfaces/ICategory";

export async function getCategories() {
  const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json');
  const categories: ICategory[] = await response.json();

  return categories;
}