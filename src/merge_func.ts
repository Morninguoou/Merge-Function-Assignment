export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
    const result: number[] = [];

    let i = 0;
    let j = collection_2.length - 1;
    let k = 0;

    while (i < collection_1.length || j >= 0 || k < collection_3.length) {
        let min: number | null = null;
        let source = "";
        
        if (i < collection_1.length) {
          min = collection_1[i];
          source = "c1";
        }
      
        if (j >= 0 && (min === null || collection_2[j] < min)) {
          min = collection_2[j];
          source = "c2";
        }
      
        if (k < collection_3.length && (min === null || collection_3[k] < min)) {
          min = collection_3[k];
          source = "c3";
        }
      
        result.push(min!);
      
        if (source === "c1") i++;
        else if (source === "c2") j--;
        else k++;
    }

  return result;
}