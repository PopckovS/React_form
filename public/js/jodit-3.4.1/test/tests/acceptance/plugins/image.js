describe('Process Images plugins', function() {
	describe('Toolbar', function() {
		describe('Click on Image button', function() {
			it('Should open image dialog and insert image by url.', function() {
				const editor = getJodit();

				editor.value = Jodit.INVISIBLE_SPACE; // IE in iframe mode can loose focus and we can not check where it paste image in start or in finish. It is only in IE

				const
					range = editor.s.createRange(true);

				range.selectNodeContents(editor.editor);
				range.collapse(false);

				clickButton('image', editor);

				const list = getOpenedPopup(editor);

				expect(window.getComputedStyle(list).display).equals('block');

				list.querySelector('input[name=url]').value = ''; // try wrong url

				list.querySelector('input[name=text]').value = '123';

				simulateEvent('submit', 0, list.querySelector('form'));

				expect(
					list.querySelectorAll('input[name=url].jodit_error').length
				).equals(1);

				list.querySelector('input[name=url]').value =
					'http://xdsoft.net/jodit/images/artio.jpg';

				simulateEvent('submit', 0, list.querySelector('form'));

				expect(sortAttributes(editor.value)).equals(
					'<p><img alt="123" src="http://xdsoft.net/jodit/images/artio.jpg" style="width:300px"></p>'
				);

				simulateEvent('mousedown', 0, editor.editor);

				expect(list.parentNode).is.null;
			});

			describe('When the cursor in the middle of some text', function() {
				it('Should insert image in this position after submit', function() {
					const editor = getJodit();

					editor.value = 'hello world!';

					const range = editor.s.createRange();

					range.setEnd(editor.editor.firstChild.firstChild, 5);
					range.collapse(false);
					editor.s.selectRange(range);

					clickButton('image', editor);

					const list = getOpenedPopup(editor),
						input = list.querySelector('input[name=url]');

					input.focus();
					input.value = 'http://xdsoft.net/jodit/images/artio.jpg';

					simulateEvent('submit', 0, list.querySelector('form'));

					expect(sortAttributes(editor.value)).equals(
						'<p>hello<img alt="" src="http://xdsoft.net/jodit/images/artio.jpg" style="width:300px"> world!</p>'
					);
				});
			});
		});
	});
});
