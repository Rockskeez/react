let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
    profilePage: {
        posts : [
            { id: 1, message: 'Hi, how are you?', likesCount: 12},
            { id: 2, message: 'it\'s my first post', likesCount: 11},
            { id: 3, message: 'blablabla', likesCount: 23},
            { id: 4, message: 'You\'re account is crazy!', likesCount: 9},
        ],
        newPostText: 'HI!!!',
    },
    dialogsPage: {
        avatars : [
            { id: 1, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTaLwH6ws6ZBx4AnSecA_7q7flltiAYit5bA&usqp=CAU'},
            { id: 2, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTaLwH6ws6ZBx4AnSecA_7q7flltiAYit5bA&usqp=CAU'},
            { id: 3, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTaLwH6ws6ZBx4AnSecA_7q7flltiAYit5bA&usqp=CAU'},
            { id: 4, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTaLwH6ws6ZBx4AnSecA_7q7flltiAYit5bA&usqp=CAU'},
            { id: 5, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTaLwH6ws6ZBx4AnSecA_7q7flltiAYit5bA&usqp=CAU'},
            { id: 6, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTaLwH6ws6ZBx4AnSecA_7q7flltiAYit5bA&usqp=CAU'},
        ],
        messages : [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
        ],
        dialogs : [
            { id: 1, name: 'Zhenya', },
            { id: 2, name: 'Sasha' },
            { id: 3, name: 'Oleg' },
            { id: 4, name: 'Nastya' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Olya' },
        ],
    },
    sidebar: {
        bestFriends: [
            { id: 1, name: 'Zhenya', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTaLwH6ws6ZBx4AnSecA_7q7flltiAYit5bA&usqp=CAU'},
            { id: 2, name: 'Sasha', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTaLwH6ws6ZBx4AnSecA_7q7flltiAYit5bA&usqp=CAU'},
            { id: 3, name: 'Oleg', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTaLwH6ws6ZBx4AnSecA_7q7flltiAYit5bA&usqp=CAU'},
        ]
    },
};

window.state = state;

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer; // observer
}

export default state;

// store