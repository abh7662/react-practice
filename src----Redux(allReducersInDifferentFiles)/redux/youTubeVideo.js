export const setYouTubeTitle = (title) => {
    return {
        type: 'SET_YOUTUBE_TITLE',
        payload: title
    }
}

export const upVoteVideo = () => {
    return {
        type: 'UPVOTE_VIDEO',
    }
}

export const downVoteVideo = () => {
    return {
        type: 'DOWNVOTE_VIDEO',
    }
}

const initialState = {
    title: "",
    viewCount: 0,
    votes: {
        up: 0,
        down: 0
    }
}

const youTubeVideoReducer = (youTubeVideo = initialState, action) => {
    switch (action.type) {
        case 'SET_YOUTUBE_TITLE':
            return {
                ...youTubeVideo,
                title: action.payload
            }
        case 'UPVOTE_VIDEO':
            return {
                ...youTubeVideo,
                votes: {
                    ...youTubeVideo.votes,
                    up: youTubeVideo.votes.up + 1
                }
            }
        case 'DOWNVOTE_VIDEO':
            return {
                ...youTubeVideo,
                votes: {
                    ...youTubeVideo.votes,
                    down: youTubeVideo.votes.down + 1
                }
            }
        default:
            return youTubeVideo
    }
}

export default youTubeVideoReducer
