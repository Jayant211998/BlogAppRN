import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch(action.type){
        case "ADD":{
            return [...state, 
                {
                    id: Math.floor(Math.random()*99999),
                    title: action.payload.title,
                    content: action.payload.content
                }]
        };
        case "EDIT":{
            return state.map((element) => {
                if(element.id === action.payload.id){
                    return action.payload;
                }
                else{
                    return element;
                }
            })
            

        };
        case "DELETE":{
            return state.filter(blog => blog.id !== action.payload);
        };
        default: {
            return state;
        }; 
    }
}
const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({type: "ADD", payload: {title, content}});
        callback();
    };
};

const editBlogPost = dispatch => {
    return (title, content, id, callback) => {
        dispatch({type: "EDIT", payload: {title, content, id}});
        callback();
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type: "DELETE", payload: id});
    };
};

export const {Context, Provider} = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost }, 
    [{title: "TEST POST", content: "This is a sample post", id: 1234}]
);