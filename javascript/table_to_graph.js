function tableToGraph(friends) {
	const graph = {}
  const arr = friends.match(/(?<=<td>).*?(?=<\/td>)/gm);

	for (let i = 0; i < arr.length - 1; i+=2) {
		const adj = arr[i + 1] === '' ? [] : arr[i + 1].split(", ");
		graph[arr[i]] = adj;
		adj.forEach(el => {
			if (!graph[el]) {
				graph[el] = [arr[i]];
			} else {
				if (!graph[el].includes(arr[i])) {
					graph[el].push(arr[i]);
				}
			}
		});
	}
	return graph;
}

if (require.main === module) {
  function printResults(obj) {
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }

  // add your own tests in here
  const friends = "<table><tr><th>Person</th><th>Friends</th></tr><tr><td>Fred</td><td>Jane, Carol, Anesh, Xi</td></tr><tr><td>Carol</td><td>Fred, Anesh, Janelle</td></tr></table>";
  const result = {
    Fred: ["Jane", "Carol", "Anesh", "Xi"],
    Jane: ["Fred"],
    Carol: ["Fred", "Anesh", "Janelle"],
    Anesh: ["Fred", "Carol"],
    Xi: ["Fred"],
    Janelle: ["Carol"]
  };

	console.log(tableToGraph(friends));

  // console.log("Expecting: ");
  // console.log(printResults(result));
  // console.log("");
  // console.log("Got: ");
  // console.log(printResults(tableToGraph(friends)));

  // console.log("");
}

module.exports = tableToGraph;

// Please add your pseudocode to this file
// And a written explanation of your solution
