// store votes in an array
let votes = []
//available options
const options = ['yes', 'no', 'maybe']

//function to handle voting
function vote(choice){
    votes.push(choice)
    console.log(votes)
    updateResults()
}

//function to count votes using for...of and return two arrays
function countVotes(votesArray){
    //create parallel arrays
    const voteOptions=[]//array of option names
    const voteCounts=[]//array of counts
    //loop through each vote using for...of
    for(let currentVote of votesArray){
        //chack if this option already exists
        let foundIndex = -1
        let index = 0

        //search through options array
        for(let option of voteOptions){
            if(option === currentVote){
                foundIndex = index
                break
            }
            index++
        }

        if(foundIndex !== -1){
            voteCounts[foundIndex]++
        }
        else{
            voteOptions.push(currentVote)
            voteCounts.push(1)
            console.log("array vote options",voteOptions)
        }
    }
    return [voteOptions, voteCounts]
}


//function to uptade the results in display using for...of with arrays
function updateResults(){
    let resultDiv = document.getElementById('result')
    //check if array is empty or not
    if(votes.length === 0){
        resultDiv.innerHTML = `
        <h2> Results </h2>
        <p class="no-votes">No votes yet. Cast your votes!</p>
        `
        return
    }

    //get two seperate arryas
    const[voteOptions, voteCounts] = countVotes(votes)

    let html = `<h2> Results </h2>`
    let index = 0
    //loop through options array using for...of
    for(let option of voteOptions){
        const count = voteCounts[index]//gets the count from parallel array
        console.log("counting yes/no/maybe", count)

    html +=`
    <div class="result-item">
    <span class="result-label">${option}<span>
    <span class="result-count">${count}</span>
    </div>
    `
    index++
    }
    resultDiv.innerHTML = html
    
}