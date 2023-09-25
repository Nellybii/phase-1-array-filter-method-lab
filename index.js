function findMatching(drivers, attribute) {
 let newDrivers = drivers.filter(function (driver) { return driver.toLowerCase() === attribute.toLowerCase() })
 return newDrivers;
  }
  
  function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
  }
  
  function matchName(drivers, argument) {
   let matchedNames = drivers.filter(function (driver) { return driver.name === argument })
   return matchedNames;
  }