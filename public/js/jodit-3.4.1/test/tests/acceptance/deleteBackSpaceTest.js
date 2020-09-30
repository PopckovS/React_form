describe('Backspace/Delete key', function() {
	let editor, range;
	beforeEach(function() {
		editor = getJodit();
		editor.value = '<p>test</p>';
		range = editor.s.createRange();
	});

	describe('For non collapsed range', function() {
		describe('Select part of text inside P element', function() {
			it('Should remove only selected range', function() {
				range.setStart(editor.editor.firstChild.firstChild, 2);
				range.setEnd(editor.editor.firstChild.firstChild, 4);

				editor.s.selectRange(range);

				simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);

				expect('<p>te</p>').equals(editor.value);
			});
		});

		describe('Select whole text inside element', function() {
			describe('Inside P', function() {
				it('Should remove selected range and remove this P', function() {
					range.selectNodeContents(editor.editor.firstChild);
					editor.s.selectRange(range);

					simulateEvent(
						'keydown',
						Jodit.KEY_BACKSPACE,
						editor.editor
					);

					expect('').equals(editor.value);
				});
			});

			describe('Inside table cell', function() {
				it('Should only remove selected range', function() {
					editor.value =
						'<table><tbody><tr><td>test</td><td>1</td></tr></tbody></table>';

					range.selectNodeContents(editor.editor.querySelector('td'));
					editor.s.selectRange(range);

					simulateEvent(
						'keydown',
						Jodit.KEY_BACKSPACE,
						editor.editor
					);

					expect(
						'<table><tbody><tr><td></td><td>1</td></tr></tbody></table>'
					).equals(editor.value.replace('<br>', ''));
				});
			});
		});
	});

	describe('Edit simple text', function() {
		describe('BackSpace', function() {
			it('Should remove previous char before cursor', function() {
				range.setStart(editor.editor.firstChild.firstChild, 2);
				range.collapse(true);
				editor.s.selectRange(range);

				simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);

				expect(editor.value).equals('<p>tst</p>');
			});

			describe('Cursor in the outside some element', function() {
				it('Should remove last char in the previous element', function() {
					editor.value = '<p><strong>123</strong></p>';

					range.setStartAfter(editor.editor.firstChild.firstChild);
					editor.s.selectRange(range);

					simulateEvent(
						'keydown',
						Jodit.KEY_BACKSPACE,
						editor.editor
					);

					expect(editor.value).equals('<p><strong>12</strong></p>');

					editor.s.insertHTML(' 1 ');
					expect(editor.value).equals(
						'<p><strong>12 1 </strong></p>'
					);
				});
			});
		});

		describe('Delete', function() {
			it('Should remove next char after cursor', function() {
				range.setStart(editor.editor.firstChild.firstChild, 2);
				range.collapse(true);
				editor.s.selectRange(range);

				simulateEvent('keydown', Jodit.KEY_DELETE, editor.editor);

				expect(editor.value).equals('<p>tet</p>');
			});
		});

		describe('Near with invisible char', function() {
			describe('BackSpace', function() {
				it('Should remove previous char and invisible char before cursor', function() {
					editor.value = '<p>te' + Jodit.INVISIBLE_SPACE + 'st</p>';

					range.setStart(editor.editor.firstChild.firstChild, 3);
					editor.s.selectRange(range);

					simulateEvent(
						'keydown',
						Jodit.KEY_BACKSPACE,
						editor.editor
					);

					expect(editor.value).equals('<p>tst</p>');
				});
			});

			describe('Delete', function() {
				it('Should remove next char and invisible char after cursor', function() {
					editor.value = '<p>te' + Jodit.INVISIBLE_SPACE + 'st</p>';

					range.setStart(editor.editor.firstChild.firstChild, 2);
					editor.s.selectRange(range);

					simulateEvent('keydown', Jodit.KEY_DELETE, editor.editor);

					expect(editor.value).equals('<p>tet</p>');
				});
			});

			describe('After BackSpace/Delete left empty node', function() {
				describe('BackSpace', function() {
					it('Should remove whole node', function() {
						editor.value = '<p>' + Jodit.INVISIBLE_SPACE + 's</p>';

						range.setStart(editor.editor.firstChild.firstChild, 2);
						editor.s.selectRange(range);

						simulateEvent(
							'keydown',
							Jodit.KEY_BACKSPACE,
							editor.editor
						);

						expect(editor.getNativeEditorValue()).equals(
							'<p><br></p>'
						);
					});
				});

				describe('Delete', function() {
					it('Should remove whole node', function() {
						editor.value = '<p>d' + Jodit.INVISIBLE_SPACE + '</p>';

						range.setStart(editor.editor.firstChild.firstChild, 0);
						editor.s.selectRange(range);

						simulateEvent(
							'keydown',
							Jodit.KEY_DELETE,
							editor.editor
						);

						expect(editor.getNativeEditorValue()).equals(
							'<p><br></p>'
						);
					});
				});
			});
		});

		describe('Cursor after empty text node', function() {
			describe('BackSpace', function() {
				it('Should remove this empty text node and first normal char in previous node', function() {
					const p = editor.editor.firstChild;

					p.appendChild(
						editor.createInside.text(
							Jodit.INVISIBLE_SPACE.repeat(4)
						)
					);

					p.appendChild(
						editor.createInside.text(
							Jodit.INVISIBLE_SPACE.repeat(4) + 'stop'
						)
					);

					expect(p.childNodes.length).equals(3);

					range.setStart(p.lastChild, 4);
					editor.s.selectRange(range);

					simulateEvent(
						'keydown',
						Jodit.KEY_BACKSPACE,
						editor.editor
					);

					expect(p.childNodes.length).equals(2);
					expect(editor.getNativeEditorValue()).equals(
						'<p>tesstop</p>'
					);
				});
			});

			describe('Delete', function() {
				it('Should remove this empty text node and first normal char in next node', function() {
					const p = editor.editor.firstChild;

					p.appendChild(
						editor.createInside.text(
							Jodit.INVISIBLE_SPACE.repeat(4)
						)
					);

					p.appendChild(
						editor.createInside.text(
							Jodit.INVISIBLE_SPACE.repeat(4) + 'stop'
						)
					);

					expect(p.childNodes.length).equals(3);

					range.setStart(p.firstChild, 4);
					editor.s.selectRange(range);

					simulateEvent('keydown', Jodit.KEY_DELETE, editor.editor);

					expect(p.childNodes.length).equals(2);
					expect(editor.getNativeEditorValue()).equals(
						'<p>testtop</p>'
					);
				});
			});
		});
	});

	describe('Near with some inseparable element', function() {
		describe('Backspace', function() {
			it('Should remove this element like simple char', function() {
				editor.value = '<p>test<img/>test</p>';

				range.setStartAfter(
					editor.editor.firstChild.firstChild.nextSibling
				);
				editor.s.selectRange(range);

				simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);

				expect(editor.value).equals('<p>testtest</p>');
			});
		});

		describe('Delete', function() {
			it('Should remove this element like simple char', function() {
				editor.value = '<p>test<img/>test</p>';

				range.setStartBefore(
					editor.editor.firstChild.firstChild.nextSibling
				);
				editor.s.selectRange(range);

				simulateEvent('keydown', Jodit.KEY_DELETE, editor.editor);

				expect(editor.value).equals('<p>testtest</p>');
			});
		});
	});

	describe('inside empty P', function() {
		describe('Backspace', function() {
			it('Should remove empty tag', function() {
				editor.value = '<p><br></p>';

				range.setStartBefore(editor.editor.firstChild.firstChild);
				editor.s.selectRange(range);

				simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);

				editor.s.insertNode(editor.createInside.text(' 2 '));

				expect(editor.value).equals('<p> 2 </p>');
			});

			describe('Near has element', function() {
				it('Should remove empty tag and set cursor in previous element', function() {
					editor.value =
						'<table><tbody>' +
						'<tr><td>1</td></tr>' +
						'</tbody></table><p><br></p>';

					const range = editor.s.createRange();

					range.setStartBefore(editor.editor.lastChild.firstChild);
					editor.s.selectRange(range);

					simulateEvent(
						'keydown',
						Jodit.KEY_BACKSPACE,
						editor.editor
					);

					editor.s.insertNode(editor.createInside.text(' 2 '));

					expect(editor.value).equals(
						'<table><tbody>' +
							'<tr><td>1 2 </td></tr>' +
							'</tbody></table>'
					);
				});
			});
		});

		describe('Delete', function() {
			it('Should remove empty tag', function() {
				editor.value = '<p><br></p>';

				range.setStartAfter(editor.editor.firstChild.firstChild);
				editor.s.selectRange(range);

				simulateEvent('keydown', Jodit.KEY_DELETE, editor.editor);

				editor.s.insertNode(editor.createInside.text(' 2 '));

				expect(editor.value).equals('<p> 2 </p>');
			});

			describe('Near has element', function() {
				it('Should remove empty tag and set cursor in next element', function() {
					editor.value =
						'<p><br></p><table><tbody>' +
						'<tr><td></td></tr>' +
						'</tbody></table>';

					range.setStartAfter(editor.editor.firstChild.firstChild);
					editor.s.selectRange(range);

					simulateEvent('keydown', Jodit.KEY_DELETE, editor.editor);

					editor.s.insertNode(editor.createInside.text(' 2 '));

					expect(editor.value).equals(
						'<table><tbody>' +
							'<tr><td> 2 </td></tr>' +
							'</tbody></table>'
					);
				});
			});
		});
	});

	describe('near empty tag', function() {
		describe('BR before P', function() {
			it('Should simple remove BR but cursor should leave inside P', function() {
				editor.value = '<br><p>test</p>';

				// set cursor in start of element

				range.setStartBefore(editor.editor.lastChild.firstChild);
				editor.s.selectRange(range);

				simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);

				editor.s.insertNode(editor.createInside.text(' 2 '));
				expect(editor.value).equals('<p> 2 test</p>');
			});
		});

		describe('HR before P', function() {
			it('Should simple remove HR but cursor should leave inside P', function() {
				editor.value = '<p>lets</p><hr><p>test</p>';

				const range = editor.s.createRange();

				// set cursor in start of element

				range.selectNodeContents(editor.editor.lastChild);
				range.collapse(true);
				editor.s.selectRange(range);

				simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);

				editor.s.insertNode(editor.createInside.text(' 2 '));
				expect(editor.value).equals('<p>lets</p><p> 2 test</p>');
			});

			describe('HR has different display style', function() {
				it('Should also remove HR but cursor should leave inside P', function() {
					const editor = getJodit({
						iframe: true,
						iframeStyle:
							Jodit.defaultOptions.iframeStyle +
							'hr {display: inline-block;}'
					});

					editor.value = '<p>lets</p><hr><p>test</p>';

					const range = editor.s.createRange();

					// set cursor in start of element

					range.selectNodeContents(editor.editor.lastChild);
					range.collapse(true);
					editor.s.selectRange(range);

					simulateEvent(
						'keydown',
						Jodit.KEY_BACKSPACE,
						editor.editor
					);

					editor.s.insertNode(editor.createInside.text(' 2 '));
					expect(editor.value).equals('<p>lets</p><p> 2 test</p>');
				});
			});
		});

		describe('The neighbor is empty H1', function() {
			describe('Backspace', function() {
				it('Should simple remove this H1', function() {
					editor.value = '<h1></h1><p>test</p>';

					range.setStartBefore(editor.editor.lastChild.firstChild);
					editor.s.selectRange(range);

					simulateEvent(
						'keydown',
						Jodit.KEY_BACKSPACE,
						editor.editor
					);

					expect(editor.value).equals('<p>test</p>');
				});

				describe('H1 with BR', function() {
					it('Should simple remove this H1', function() {
						const editor = getJodit();

						editor.value = '<h1><br></h1><p>test</p>';

						range.selectNodeContents(editor.editor.lastChild);
						range.collapse(true);
						editor.s.sel.removeAllRanges();
						editor.s.sel.addRange(range);

						simulateEvent(
							'keydown',
							Jodit.KEY_BACKSPACE,
							editor.editor
						);

						expect(editor.value).equals('<p>test</p>');
					});
				});
			});

			describe('Delete', function() {
				it('Should simple remove this H1', function() {
					const editor = getJodit();

					editor.value = '<p>test</p><h1></h1>';

					const range = editor.s.createRange();

					// set cursor in start of element

					range.selectNodeContents(editor.editor.firstChild);
					range.collapse(false);
					editor.s.sel.removeAllRanges();
					editor.s.sel.addRange(range);

					simulateEvent('keydown', Jodit.KEY_DELETE, editor.editor);

					expect(editor.value).equals('<p>test</p>');
				});

				describe('H1 with BR', function() {
					it('Should simple remove this H1', function() {
						const editor = getJodit();

						editor.value = '<p>test</p><h1><br></h1>';

						const range = editor.s.createRange();

						// set cursor in start of element

						range.selectNodeContents(editor.editor.firstChild);
						range.collapse(false);
						editor.s.selectRange(range);

						simulateEvent(
							'keydown',
							Jodit.KEY_DELETE,
							editor.editor
						);

						expect(editor.value).equals('<p>test</p>');
					});
				});
			});
		});
	});

	describe('inside empty TD', function() {
		it('Should doing nothing', function() {
			const editor = getJodit();

			editor.value =
				'<table><tbody>' + '<tr><td></td></tr>' + '</tbody></table>';

			editor.s.setCursorIn(editor.editor.querySelector('td'));

			simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);
			expect(
				'<table><tbody>' + '<tr><td></td></tr>' + '</tbody></table>'
			).equals(editor.value);

			editor.s.focus();
			editor.s.insertNode(editor.createInside.text(' 2 '));

			expect(
				'<table><tbody>' + '<tr><td> 2 </td></tr>' + '</tbody></table>'
			).equals(editor.value);
		});
	});

	describe('after last char inside tag', function() {
		describe('inside A', function() {
			it('Should remove empty tag and set cursor in previous element', function() {
				editor.value = '<p><a href="#test">t</a></p>';

				editor.s.setCursorIn(editor.editor.firstChild.firstChild, false);

				simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);

				expect(editor.value).equals('<p><br></p>');
			});
		});

		describe('inside P', function() {
			it('Should not remove empty tag', function() {
				editor.value = '<p>r</p><p>t</p>';

				editor.s.setCursorIn(editor.editor.lastChild, false);

				simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);

				expect(editor.value).equals('<p>r</p><p><br></p>');
			});
		});
	});

	describe('Cursor after/before element', function() {
		describe('Backspace key', function() {
			it('Should remove that element', function() {
				const editor = getJodit();
				editor.value = '<p><img src="tests/artio.jpg"/>test</p>';

				const sel = editor.s.sel,
					range = editor.s.createRange();

				range.setStartAfter(editor.editor.firstChild.firstChild);
				range.collapse(true);
				sel.removeAllRanges();
				sel.addRange(range);

				simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);

				expect('<p>test</p>').equals(editor.value);

				editor.s.insertNode(editor.createInside.text(' a '));
				expect('<p> a test</p>').equals(editor.value);
			});

			describe('After P before Table', function() {
				it('Should remove P', function() {
					const editor = getJodit();
					editor.value =
						'<p><br></p><table><tbody><tr><td>1</td></tr></tbody></table>';

					const range = editor.s.createRange();

					range.setStartAfter(editor.editor.firstChild);
					range.collapse(true);
					editor.s.selectRange(range);

					simulateEvent(
						'keydown',
						Jodit.KEY_BACKSPACE,
						editor.editor
					);

					expect(editor.value).equals(
						'<table><tbody><tr><td>1</td></tr></tbody></table>'
					);

					editor.s.insertNode(editor.createInside.text(' a '));
					expect(editor.value).equals(
						'<p> a </p><table><tbody><tr><td>1</td></tr></tbody></table>'
					);
				});
			});
		});

		describe('Delete key', function() {
			it('Should remove that element', function() {
				const editor = getJodit();
				editor.value = '<p>test<img src="tests/artio.jpg"/></p>';

				const sel = editor.s.sel,
					range = editor.s.createRange();

				range.setStartBefore(editor.editor.querySelector('img'));
				range.collapse(true);
				sel.removeAllRanges();
				sel.addRange(range);

				simulateEvent('keydown', Jodit.KEY_DELETE, editor.editor);

				expect('<p>test</p>').equals(editor.value);

				editor.s.insertNode(editor.createInside.text(' a '));
				expect('<p>test a </p>').equals(editor.value);
			});
		});
	});

	describe('On the edge of two tag', function() {
		describe('Backspace', function() {
			it('Should connect both elements in one element', function() {
				editor.value = '<p>Test</p><p>Test</p>';

				range.setStart(editor.editor.lastChild.firstChild, 0);
				editor.s.selectRange(range);

				simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);

				expect(sortAttributes(editor.value)).equals('<p>TestTest</p>');

				editor.s.insertHTML(' a ');
				expect(editor.value).equals('<p>Test a Test</p>');
			});

			describe('Space between two elements', function() {
				it('Should connect both elements in one element', function() {
					editor.value = '<p>Test</p> \n <p>Test</p>';

					range.setStart(editor.editor.lastChild.firstChild, 0);
					editor.s.selectRange(range);

					simulateEvent(
						'keydown',
						Jodit.KEY_BACKSPACE,
						editor.editor
					);

					expect(sortAttributes(editor.value)).equals(
						'<p>TestTest</p>'
					);

					editor.s.insertHTML(' a ');
					expect(editor.value).equals('<p>Test a Test</p>');
				});
			});
		});

		describe('Delete', function() {
			it('Should connect both elements in one element', function() {
				editor.value = '<p>Test</p><p>Test</p>';

				range.setStartAfter(editor.editor.firstChild.firstChild);
				editor.s.selectRange(range);

				simulateEvent('keydown', Jodit.KEY_DELETE, editor.editor);

				expect(sortAttributes(editor.value)).equals('<p>TestTest</p>');

				editor.s.insertHTML(' a ');
				expect(editor.value).equals('<p>Test a Test</p>');
			});
		});
	});

	describe('In the middle of two UL elements', function() {
		describe('Backspace', function() {
			describe('In first LI of second UL', function() {
				it('Should connect both UL in one element', function() {
					editor.value =
						'<ul><li>Test</li></ul><ul><li>Some text</li></ul>';

					range.setStart(
						editor.editor.lastChild.firstChild.firstChild,
						0
					);
					editor.s.selectRange(range);

					simulateEvent(
						'keydown',
						Jodit.KEY_BACKSPACE,
						editor.editor
					);

					expect(sortAttributes(editor.value)).equals(
						'<ul><li>Test</li><li>Some text</li></ul>'
					);

					editor.s.insertNode(editor.createInside.text(' a '));

					expect(sortAttributes(editor.value)).equals(
						'<ul><li>Test</li><li> a Some text</li></ul>'
					);
				});
			});

			describe('In the P element', function() {
				it('Should connect both UL in one element', function() {
					editor.value =
						'<ul><li>Test</li><li> </li><li>Some text</li></ul>';

					const range = editor.s.createRange();

					range.setStart(editor.editor.firstChild.childNodes[1], 0);
					range.collapse(true);

					editor.s.selectRange(range);

					simulateEvent('keydown', Jodit.KEY_ENTER, editor.editor);

					expect(sortAttributes(editor.value)).equals(
						'<ul><li>Test</li></ul><p><br></p><ul><li>Some text</li></ul>'
					);

					editor.s.focus();
					simulateEvent(
						'keydown',
						Jodit.KEY_BACKSPACE,
						editor.editor
					);

					expect(sortAttributes(editor.value)).equals(
						'<ul><li>Test</li><li>Some text</li></ul>'
					);

					editor.s.focus();
					editor.s.insertNode(editor.createInside.text(' a '));
					expect(editor.value).equals(
						'<ul><li>Test a </li><li>Some text</li></ul>'
					);
				});
			});
		});

		describe('Delete', function() {
			describe('In last LI of first UL', function() {
				it('Should connect both UL in one element', function() {
					editor.value =
						'<ul><li>Test</li></ul><ul><li>Some text</li></ul>';

					range.setStartAfter(
						editor.editor.firstChild.firstChild.firstChild
					);
					editor.s.selectRange(range);

					simulateEvent(
						'keydown',
						Jodit.KEY_DELETE,
						editor.editor
					);

					expect(sortAttributes(editor.value)).equals(
						'<ul><li>Test</li><li>Some text</li></ul>'
					);

					editor.s.insertNode(editor.createInside.text(' a '));

					expect(sortAttributes(editor.value)).equals(
						'<ul><li>Test a </li><li>Some text</li></ul>'
					);
				});
			});

			describe('In the P element', function() {
				it('Should connect both UL in one element', function() {
					editor.value =
						'<ul><li>Test</li><li> </li><li>Some text</li></ul>';


					range.setStart(editor.editor.firstChild.childNodes[1], 0);
					editor.s.selectRange(range);

					simulateEvent('keydown', Jodit.KEY_ENTER, editor.editor);

					expect(sortAttributes(editor.value)).equals(
						'<ul><li>Test</li></ul><p><br></p><ul><li>Some text</li></ul>'
					);

					editor.s.focus();
					simulateEvent(
						'keydown',
						Jodit.KEY_DELETE,
						editor.editor
					);

					expect(sortAttributes(editor.value)).equals(
						'<ul><li>Test</li><li>Some text</li></ul>'
					);

					editor.s.focus();
					editor.s.insertNode(editor.createInside.text(' a '));
					expect(editor.value).equals(
						'<ul><li>Test</li><li> a Some text</li></ul>'
					);
				});
			});
		});
	});

	describe('Enter backspace/delete in the start of some LI', function() {
		describe('in first LI', function() {
			describe('Enter backspace', function() {
				it('Should remove this LI and move all conntent in P', function() {
					editor.value = '<ul><li>Test</li><li>Some text</li></ul>';

					range.setStart(
						editor.editor.firstChild.firstChild.firstChild,
						0
					);
					editor.s.selectRange(range);

					simulateEvent(
						'keydown',
						Jodit.KEY_BACKSPACE,
						editor.editor
					);

					expect('<p>Test</p><ul><li>Some text</li></ul>').equals(
						editor.value
					);

					editor.s.insertNode(editor.createInside.text(' a '));
					expect('<p> a Test</p><ul><li>Some text</li></ul>').equals(
						editor.value
					);
				});
			});

			describe('Enter delete', function() {
				it('Should remove all text content and after this remove that LI', function() {
					editor.value =
						'<ul><li>' +
						Jodit.INVISIBLE_SPACE +
						'</li><li>Some text</li></ul>';

					range.setStart(
						editor.editor.firstChild.firstChild.firstChild,
						0
					);
					editor.s.selectRange(range);

					simulateEvent('keydown', Jodit.KEY_DELETE, editor.editor);
					expect('<ul><li>Some text</li></ul>').equals(editor.value);

					editor.s.insertNode(editor.createInside.text(' a '));
					expect('<ul><li> a Some text</li></ul>').equals(
						editor.value
					);
				});
			});
		});

		describe('in alone LI', function() {
			it('Should remove this LI and UL and move all content in P', function() {
				editor.value = '<ul><li>Test</li></ul>';

				range.setStart(
					editor.editor.firstChild.childNodes[0].firstChild,
					0
				);
				editor.s.selectRange(range);


				simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);

				expect('<p>Test</p>').equals(editor.value);

				editor.s.insertNode(editor.createInside.text(' a '));
				expect('<p> a Test</p>').equals(editor.value);
			});
		});

		it('Should connect this LI with previous', function() {
			editor.value = '<ul><li>Test</li><li>Some text</li></ul>';

			range.setStart(
				editor.editor.firstChild.childNodes[1].firstChild,
				0
			);

			editor.s.selectRange(range);

			simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);

			expect(editor.value).equals('<ul><li>TestSome text</li></ul>');

			editor.s.insertNode(editor.createInside.text(' a '));
			expect(editor.value).equals('<ul><li>Test a Some text</li></ul>');
		});

		describe('And enter Enter', function() {
			it('Should split this LI on two again', function() {
				editor.value = '<ul><li>Test</li><li>Some text</li></ul>';

				range.setStart(
					editor.editor.firstChild.childNodes[1].firstChild,
					0
				);
				editor.s.selectRange(range);

				simulateEvent('keydown', Jodit.KEY_BACKSPACE, editor.editor);

				expect('<ul><li>TestSome text</li></ul>').equals(editor.value);

				simulateEvent('keydown', Jodit.KEY_ENTER, editor.editor);
				expect(editor.value).equals(
					'<ul><li>Test</li><li>Some text</li></ul>'
				);
			});
		});
	});
});
