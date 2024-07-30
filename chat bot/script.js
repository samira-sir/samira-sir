document.getElementById('chatbot-icon').onclick = function () {
    var chatbot = document.getElementById('chatbot');
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'flex';
    } else {
        chatbot.style.display = 'none';
    }
};

document.getElementById('chatbot-send').onclick = function () {
    var inputField = document.getElementById('chatbot-input-field');
    var message = inputField.value;
    if (message.trim() !== '') {
        addMessage('user', message);
        inputField.value = '';

        setTimeout(function () {
            var botResponse = getBotResponse(message);
            addMessage('bot', botResponse);
        }, 1000);
    }
};

function addMessage(sender, message) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message', sender + '-message');
    messageElement.textContent = message;
    document.getElementById('chatbot-messages').appendChild(messageElement);
    document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight;
}

function getBotResponse(userMessage) {
    var lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
        return 'Hello! If you want help just type and send help.';
    } else if (lowerCaseMessage.includes('how are you')) {
        return 'I am just a bot, but I am here to help you! If you want help just type and send help.';
    } else if (lowerCaseMessage.includes('help')) {
        showHelpTopics();
        return 'කරුණාකර ඔබේ ගැටලුව තෝරන්න.';
    } else {
        return 'I am sorry, I did not understand that. If you want help just type and send help.';
    }
}

function showHelpTopics() {
    var topics = ['Login Errors', 'Registration Errors', 'Recording Errors', 'Online Class Errors', 'Account Error', 'Other Errors'];
    var chatbotMessages = document.getElementById('chatbot-messages');
    topics.forEach(function (topic) {
        var topicButton = document.createElement('button');
        topicButton.classList.add('topic-button');
        topicButton.textContent = topic;
        topicButton.onclick = function () {
            showTopicDetails(topic);
        };
        chatbotMessages.appendChild(topicButton);
    });
}

function showTopicDetails(topic) {
    var details = {
        'Login Errors': 'ඔබගේ username යට පසුව space නැති විය යුතු අතර password ද නිවැරදි විය යුතුය.',
        'Registration Errors': 'ඔබේ Register වීමේ ගැටලුව තෝරන්න:',
        'Recording Errors': 'Recording නැරඹීම සඳහා කලින් ලබාදුන් නිවැරදි නම සහ Password ලබාදිය යුතුය.',
        'Online Class Errors': 'ඔබ මාර්ගගත පංතියට ඇතුල්වූයේ නිවැරදි වේලාවේ සහ නිවැරදි button මගින් බව පරීක්ෂා කර බලන්න.',
        'Account Error': 'ඔබගේ නව ගිණුම ක්‍රියාත්මක නොවේනම් මෙම අංකයට WhatsApp පණිවිඩයක් යොමු කරන්න (077 923 922 0).',
        'Other Errors': 'වෙනත් ප්‍රශ්න ඇත්නම් මෙම අංකයට WhatsApp පණිවිඩයක් යොමු කරන්න (077 923 922 0).',
    };

    if (topic === 'Registration Errors') {
        showRegistrationErrors();
    } else if (topic === 'Account Error' || topic === 'Other Errors') {
        showErrorWithLink(topic);
    } else {
        addMessage('bot', details[topic]);
        addFollowUpQuestion(topic);
    }
}

function showRegistrationErrors() {
    var registrationErrors = ['Passwords do not match', 'Wrong Security Code', 'Nothing Happen'];
    var chatbotMessages = document.getElementById('chatbot-messages');
    registrationErrors.forEach(function (error) {
        var errorButton = document.createElement('button');
        errorButton.classList.add('topic-button');
        errorButton.textContent = error;
        errorButton.onclick = function () {
            showRegistrationErrorDetails(error);
        };
        chatbotMessages.appendChild(errorButton);
    });
}

function showRegistrationErrorDetails(error) {
    var details = {
        'Passwords do not match': 'ඔබ ඇතුළත් කරන ලද passwords දෙක සමාන නොවේ. එම නිසා සමාන passwords දෙකක් ඇතුළත් කරන්න.',
        'Wrong Security Code': 'ඔබේ WhatsApp Group ඇති නිවැරදි Security key එක ඇතුළත් කරන්න.',
        'Nothing Happen': 'ඔබේ අන්තර්ජාල සම්බන්ධතාවය පරීක්ෂා කර බලන්න.',
    };
    addMessage('bot', details[error]);
    addFollowUpQuestion('Registration Errors');
}

function showErrorWithLink(topic) {
    var details = {
        'Account Error': 'ඔබගේ නව ගිණුම ක්‍රියාත්මක නොවේනම් මෙම අංකයට WhatsApp පණිවිඩයක් යොමු කරන්න (077 923 922 0).',
        'Other Errors': 'වෙනත් ප්‍රශ්න ඇත්නම් මෙම අංකයට WhatsApp පණිවිඩයක් යොමු කරන්න (077 923 922 0).',
    };
    var links = {
        'Account Error': 'https://wa.link/36tjhc',
        'Other Errors': 'https://wa.link/8udua4',
        'Join with Agent': 'https://wa.link/z7h5d3'
    };
    
    addMessage('bot', details[topic]);
    
    var linkButton = document.createElement('button');
    linkButton.classList.add('topic-button', 'link-button');
    linkButton.textContent = 'Contact Us';
    linkButton.onclick = function () {
        var url = links[topic];
        console.log('Opening URL:', url); // Debugging line
        window.open(url, '_blank');
    };
    document.getElementById('chatbot-messages').appendChild(linkButton);

    addFollowUpQuestion(topic);
}

function addFollowUpQuestion(topic) {
    var followUpQuestion = document.createElement('div');
    followUpQuestion.classList.add('message', 'bot-message');
    followUpQuestion.textContent = 'ඔබගේ දෝෂය මගහරවා ගත්තාද? දෝෂය මගහරවා ගත්තා නම් "Yes" ලෙසද නැතහොත් "No" ලෙසද ටයිප් කරන්න.';
    document.getElementById('chatbot-messages').appendChild(followUpQuestion);

    var yesButton = document.createElement('button');
    yesButton.classList.add('topic-button', 'follow-up-button');
    yesButton.textContent = 'Yes';
    yesButton.onclick = function () {
        addMessage('bot', 'අප සමඟ සම්බන්ධ වූවාට ස්තුතියි.');
        addHr();
    };
    document.getElementById('chatbot-messages').appendChild(yesButton);

    var noButton = document.createElement('button');
    noButton.classList.add('topic-button', 'follow-up-button');
    noButton.textContent = 'No';
    noButton.onclick = function () {
        var linkButton = document.createElement('button');
        linkButton.classList.add('topic-button', 'link-button');
        linkButton.textContent = 'Whatsapp මාර්ගයෙන් දෝෂය විසඳාගන්න';
        linkButton.onclick = function () {
            var links = {
                'Account Error': 'https://wa.link/36tjhc',
                'Other Errors': 'https://wa.link/8udua4',
                'Join with Agent': 'https://wa.link/z7h5d3'
            };
            var url = links['Join with Agent']; // Make sure the link is correct
            console.log('Opening URL:', url); // Debugging line
            window.open(url, '_blank');
        };
        document.getElementById('chatbot-messages').appendChild(linkButton);
        addHr();
    };
    document.getElementById('chatbot-messages').appendChild(noButton);
}

function addHr() {
    var hr = document.createElement('hr');
    document.getElementById('chatbot-messages').appendChild(hr);
}