"use strict";

// Simple popup notifications.
// Herald definition: an official messenger bringing news...nice!
// NOTE: this does not use jQuery, but does use some jQuery var naming conventions when storing DOM nodes.
// NOTE: The markup is Bootstrap specific

// TODO: The timeout close() function still fires even after the user has manually closed the alert
// resulting in an err: `Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.` because the node has already been removed
// Name setTimeout in 'this' so timeout can be cleared when user clicks x to close

const herald = {
	options: {
		delay: 3000,
		container_id: 'heraldContainer'
	},
	$container: null, // will be a DOM node
	init: function() {
		// Create and append the div where notifications will be appended
		const $container = document.createElement('div');
		$container.setAttribute('id', this.options.container_id);
		document.body.appendChild($container);
		this.$container = $container;
		// Create a click handler to close the notification
		this.$container.addEventListener('click', function(e) {
			if (e.target.tagName.toLowerCase() === 'button') {
				// Traverse up from the button to find the actual $notification that was added
				const $notification = e.target.parentNode.parentNode; // grandparent
				this.close($notification);
			}
		}.bind(this));
		// Add a style tag for CSS
		var $createdStyleTag = document.createElement('style');
		$createdStyleTag.textContent = styles; // defined globally outside herald methods, see bottom of file
		document.body.appendChild($createdStyleTag);
	},
	notify: function(message, title, type) {
		if (this.$container === null) {
			this.init();
		}
		const markedUpTitle = title ? `<p class="lead">${title}</p> ` : ``;
		const markup = `
			<div class="alert alert-dismissible alert-${type} herald-notification">
				<button type="button" class="close">&times;</button>
				${markedUpTitle}
				<p>${message}</p>
			</div>
		`;
		const $notification = document.createElement('div');
		$notification.innerHTML = markup;
		this.$container.appendChild($notification);
		this.delayedClose($notification);
	},
	close: function($notification) {
		this.$container.removeChild($notification);
	},
	delayedClose: function($notification) {
		setTimeout(function() {
			this.close($notification);
		}.bind(this), this.options.delay);
	},
	success: function(message, title = null) {
		this.notify(message, title, 'success');
	},
	error: function(message, title = null) {
		this.notify(message, title, 'danger');
	},
	warning: function(message, title = null) {
		this.notify(message, title, 'warning');
	},
	info: function(message, title = null) {
		this.notify(message, title, 'info');
	},
};

module.exports = herald;

// The styles that are added to the <style> tag. Not needed in the actual "module"
const styles = `
	.herald-notification {
		z-index: 100;
		position: fixed;
		width: 80%;
		left: 10%;
		bottom: 0;
		-webkit-animation-duration: 0.5s;
		animation-duration: 0.5s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
		-webkit-animation-name: slideInUp;
		animation-name: slideInUp;
	}
	.herald-notification > p + p {
		margin-top: 0;
	}
	@-webkit-keyframes slideInUp {
		0% {
			-webkit-transform: translate3d(0,100%,0);
			transform: translate3d(0,100%,0);
			visibility: visible
		}

		100% {
			-webkit-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0)
		}
	}
	@keyframes slideInUp {
		0% {
			-webkit-transform: translate3d(0,100%,0);
			transform: translate3d(0,100%,0);
			visibility: visible
		}

		100% {
			-webkit-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0)
		}
	}
`;
