import { ref } from "vue";

interface Bla {
  bla: string;
}

export function useBla(someInput: string) {
  const bla = ref<Bla | null>(null);

  return {
    bla,
    someInput,
  };
}
