const textarea = document.getElementById("message-input");
const messagesContainer = document.querySelector(".messages__body");
const maxRows = parseInt(textarea.dataset.maxRows) || 7;
const lineHeight = parseInt(getComputedStyle(textarea).lineHeight); // Получаем line-height
let rows = textarea.rows;
const sendBtn = document.getElementById("send-button");

messagesContainer.scrollTop = messagesContainer.scrollHeight;

textarea.addEventListener("input", () => {
	textarea.style.height = "auto";

	const newHeight = Math.min(textarea.scrollHeight + 2, lineHeight * maxRows + 24 + 2);

	textarea.style.height = `${newHeight}px`;
});

textarea.addEventListener("keypress", function (e) {
	if (e.key === "Enter" && !e.shiftKey) {
		e.preventDefault();
		sendMessage(textarea.value);
		textarea.value = "";
	}
});

sendBtn.addEventListener("click", function (e) {
	e.preventDefault();

	sendMessage(textarea.value);
	textarea.value = "";
});

function sendMessage(msg) {
	if (msg.trim()) {
		const messagesContainer = document.querySelector(".messages__body");
		const messages = document.querySelector(".messages__list");
		const newMessage = document.createElement("div");
		const icon = document.createElement("div");
		const image = document.createElement("img");
		const messageText = document.createElement("div");
		const text = document.createElement("p");

		newMessage.classList.add("messages__item");
		newMessage.classList.add("my");
		newMessage.classList.add("new");
		messageText.classList.add("messages__item_text");
		icon.classList.add("messages__item_icon");
		image.classList.add("container__image");
		image.src = "assets/img/my.png";
		console.log(msg);
		text.innerHTML = msg.trim();

		icon.appendChild(image);
		messageText.appendChild(text);

		newMessage.appendChild(icon);
		newMessage.appendChild(messageText);

		messages.appendChild(newMessage);
		messagesContainer.scrollTop = messagesContainer.scrollHeight;
	}
}
