
const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');


var userName;

const logListener = () => (loginForm.onsubmit = () => {
    signIn(userNameInput.value);
    return false;
});

logListener();

const signIn = name => {
    if(name == ''){
        alert('Login cannot be empty.')
    }
    userName = name;
    loginForm.classList.remove('show');
    messagesSection.classList.add('show');
}
 