import { ref } from "vue";

interface RandomInterface {
  test: string;
}

export function useTest(input: string) {
  const reference = ref<RandomInterface | null>(null);

  return {
    reference,
    input,
  };
}
