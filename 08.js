/**
 * Q: 배열을 특정 크기로 나누기 (Chunk)
 *
 * - `chunkArray` 함수를 작성하세요.
 *   1. 배열(arr)과 덩어리 크기(size)를 입력받아, 해당 크기로 배열을 나눈 2차원 배열을 반환.
 *   2. 마지막 덩어리는 나머지 원소만 포함
 *
 * 예)
 *   chunkArray([1,2,3,4,5], 2) => [[1,2],[3,4],[5]]
 *
 * @param {any[]} arr
 * @param {number} size
 * @returns {any[][]}
 */

// TODO: chunkArray 함수를 작성하세요.
function chunkArray(arr, size) {
  // TODO
  return arr.reduce((arr, cur, i) => {
    // 1, 3, 5
    // 0 % 2 ===> 0
    // 1
    // 2 % 2 ===> 0
    if (i % size === 0) arr.push([]);

    arr[arr.length - 1].push(cur);
    return arr;
  }, []);
}

chunkArray([1, 2, 3, 4, 5], 2);

// export를 수정하지 마세요.
export { chunkArray };
