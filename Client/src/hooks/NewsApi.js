
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
    console.log(storyId)
    const arr=[];
    try{
        await new Promise(resolve => setTimeout(resolve, 10000));
        for(let i=0;i<10;i++){
            const response = await fetch(`${storyUrl + storyId[i]}.json`);
            const result=await response.json()
            console.log(result)
            arr.push(result)
        }
        return arr;
    }
    catch(err){
        console.log(err)
    }
};

export const getStoryIds = async () => {
    try{
        const response = await fetch(newStoriesUrl);
        const result=response.json()
        return result;
    }
    catch(err){
        console.log(err)
    }
};