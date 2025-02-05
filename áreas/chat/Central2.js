const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatMessages = document.querySelector('.chat-messages');
const chatHeaderTitle = document.getElementById('chat-header-title');

// Função para enviar mensagens
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        // Cria um elemento de mensagem
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('message', 'outgoing'); // Adiciona classes para estilização

        // Adiciona a mensagem à área de mensagens
        chatMessages.appendChild(messageElement);

        // Limpa o campo de entrada
        messageInput.value = '';

        // Aqui você pode adicionar o código para enviar a mensagem para o servidor
        // usando WebSocket ou outra técnica
        socket.emit('chat message', message); // Envia a mensagem para o servidor
    }
});

// Função para fechar o chat
function closeChat() {
  window.location.href = "portal.html"
}

// Lógica para receber mensagens do servidor e exibir no lado direito
socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messageElement.classList.add('message', 'incoming'); // Adiciona classes para estilização
    chatMessages.appendChild(messageElement);
});