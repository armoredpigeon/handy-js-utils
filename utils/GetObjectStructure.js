const getStructure = (givenObject) => {
  let result = "{";
  let keyList = Object.keys(givenObject).sort();
  keyList.forEach((key) => {
    if (givenObject[key] === null) {
      result += ${ key }: null,
    } else if (typeof givenObject[key] === "object" && givenObject[key].constructor.toString().includes("Object")) {
      result += ${ key }: ${ getStructure(givenObject[key]) }, ;
    } else {
      let typeName = typeof givenObject[key];
      if (typeName === "object") {
        typeName = givenObject[key].constructor.toString().split(" ")[1];
      }
      result += ${ key }: ${ typeName }, ;
    }
  });
  result += " }";
  result = result.replace(/\(\)/g, "");
  result = result.replace(/\s{2}/g, " ");
  result = result.replace(/(,\s+\})/g, " }");
  return result;
};

export { getStructure };