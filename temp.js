
let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffet",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein"
]
console.log(names.some((item)=>{
    let splitName = item.split(' ')
    splitName.pop()
    return splitName.some(eachName=>eachName.toLocaleLowerCase().includes("p"))
  }))