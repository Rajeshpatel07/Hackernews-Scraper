
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;
export const getStory = async (storyIds) => {
    try {
        const stories = await Promise.all(
            storyIds.slice(0, 10).map(async (storyId) => {
                const response = await fetch(`${storyUrl}${storyId}.json`);
                return response.json();
            })
        );
        return stories.filter(story => story); 
    } catch (err) {
        console.log(err);
        return [];
    }
};


export const getStoryIds = async () => {
    try{
        const response = await fetch(newStoriesUrl);
        const result= await response.json()
        return result;
    }
    catch(err){
        console.log(err)
    }
};