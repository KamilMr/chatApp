
const loginForm = document.getElementById('welcome-form');
const addMessageForm = document.getElementById('add-messages-form');
const messagesSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-list');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');

/* SET UP LOGINFORM */
    var userName;

    const welcomFormListener = () => (loginForm.onsubmit = () => {
        signIn(userNameInput.value);
        return false;
    });

    welcomFormListener();

    const signIn = name => {
        if(name == ''){
            alert('Login cannot be empty.')
        }
        userName = name;
        loginForm.classList.remove('show');
        messagesSection.classList.add('show');
    }
 
/* SET UP ADDMESSAGEFORM */

    const messageFormListener = (params) => (addMessageForm.onsubmit = () => {
        sendMessage(messageContentInput.value);
        return false;
    });

    messageFormListener();

    const sendMessage = (text) => {
        if(text == ''){
            alert('Text field is empty.')
        }
        addMessage(userName, text);
    }

    const addMessage = (userName, text) => {
        console.log(userName, text);
        messageContentInput.value = '';
    }