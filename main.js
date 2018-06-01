const tnLeg = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: 'Tennessee Legislature'
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: '01-20-09'
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: '03-01-12'
    },
    jobTitle: {
        enumberable: false,
        writable: false,
        value: 'Legislative Assistant'
    }
})

const marzCakery = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: 'Marz Cakery'
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: '03-02-12'
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: '01-04-14'
    },
    jobTitle: {
        enumberable: false,
        writable: false,
        value: 'Designer/Baker'
    }
})

const gOO = Object.create({}, {
    business: {
        enumerable: true,
        writable: false,
        value: 'Grand Ole Opry'
    },
    employmentStart: {
        enumerable: true,
        writable: false,
        value: '01-05-14'
    },
    employmentEnd: {
        enumerable: true,
        writable: false,
        value: '02-02-18'
    },
    jobTitle: {
        enumberable: false,
        writable: false,
        value: 'Administration Coordinator'
    }
})

// Write a function that will build, and return, a job object. Make sure you define an argument for each one of the properties you want to be in the object.

// const JobMaker = (a,r,g,u,m,e,n,t,s) {
//     return theObjectYouBuilt
// }

const jobMaker = (business, employmentStart, employmentEnd, jobTitle) => {
    
    const builtJob = Object.create({}, {
      business:  {
          value: business
        },
      employmentStart: {
          value: employmentStart
        },
      employmentEnd: {
          value: employmentEnd
        },
      jobTitle: {
          value: jobTitle
        },
    });
    
    return builtJob;
  }

jobMaker('store', '1-1-01', '1-2-01', 'manager');


// Put each of your jobs into an array.
// Iterate over the array, and use document.createElement() to build an <article> element representing each job. The id property of the element should be the name of the business.

const tennLeg = jobMaker('Tennessee Legislature', '01-20-09', '03-01-12', 'Legislative Assistant');
const marz = jobMaker('Marz Cakery', '03-02-12', '01-04-14', 'Designer/Baker');
const opry = jobMaker('Grand Ole Opry', '01-05-14', '01-04-14', 'Administration Coordinator');

const jobsArray = [tennLeg, marz, opry];


for (let i=0; i<jobsArray.length; i++) {
    let article = document.createElement('article');
    let div = document.getElementById('appended');
    div.appendChild(article);
    article.setAttribute('id', jobsArray[i].business);
}