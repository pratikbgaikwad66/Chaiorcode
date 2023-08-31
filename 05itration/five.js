const coding =[ "js", "ruby", "css", "java"]

coding.forEach((item) => {

    // console.log(item);
})

function printme(item) {
    console.log(item);
}

// coding.forEach(printme);

const myCoding = [{
    languagename: "javascript",
    languagefilename: "js"

    
    },
    {
        languagename: "phythone",
        languagefilename: "ph"
    
   },
  {
    languagename: "java",
    languagefilename: "ja"

  },
        ]
    myCoding.forEach( (item) => {
        console.log(item.languagename);
    })