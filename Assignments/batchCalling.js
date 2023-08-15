const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const promisifiedArr = arr.map((val) => Promise.resolve(val));

async function batchPromises(promiseArr) {
  const BATCH_SIZE = 5;
  let results = [];
  for (let i = 0; i < promiseArr.length; i += BATCH_SIZE) {
    const batch = promiseArr.slice(i, i + BATCH_SIZE);
    const _results = await Promise.all(batch);
    results.push(..._results);
  }

  return results;
}

batchPromises(promisifiedArr)
  .then((res) => {
    console.log("Results", res);
  })
  .catch((err) => {
    console.log("Error while fetching the batch", err);
  });
